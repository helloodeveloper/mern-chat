import { useEffect, useRef, useState } from 'react'
import Avatar from '../../assests/Avatar.svg'
import Input from '../../components/Input'
import { io } from 'socket.io-client';

const Dashboard = () => {
        // eslint-disable-next-line
        const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
        const [ conversations, setConversations] = useState([]);
        const [ messages, setMessages] = useState({});
        const [ message, setMessage] = useState('');
        const [users , setUsers] = useState([]);
        const [ socket, setSocket ] = useState(null);
        const messageRef = useRef(null);
     //   console.log("users > " , users);
     //    console.log("messages > " , messages);
        useEffect(() => {
            setSocket(io('http://localhost:8080'))
        }, [])  

        useEffect(() => {
            socket?.emit('addUser', user?.id);
            socket?.on('getUsers', users => {
                console.log("Active users > " , users);
            });
            socket?.on('getMessage', data => {
                //console.log("data > " , data);
                setMessages(prev => ({
                    ...prev,
                    messages: [...prev.messages, {user: data.user , message: data.message}]  
                }))
            });
        //eslint-disable-next-line
        }, [socket]);

         useEffect(()=>{
            messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
         }, [messages?.messages]) 
        

         useEffect (  () =>{
            const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
            const fetchConversations =async () => { 
                const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}` , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const resData = await res.json();
            setConversations(resData);
           }
            fetchConversations();
         }, []);

         useEffect(()=>{
            const fetchUsers = async () => {
                const res = await fetch(`http://localhost:8000/api/users/${user?.id}` , {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
                const resData = await res.json();
                setUsers(resData);
            }
            fetchUsers();
         //eslint-disable-next-line
        }, []);


         //eslint-disable-next-line
         
        const fetchMessages = async (conversationId, receiver) => {
            const res = await fetch(`http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}` , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const resData = await res.json();
           // console.log("resdata > " , resData);
            setMessages({messages: resData, receiver , conversationId});
        }; 

        const sendMessage = async (e) => {
            socket?.emit('sendMessage', {
                conversationId: messages?.conversationId,
                senderId: user?.id,
                message,
                receiverId: messages?.receiver?.receiverId
                
            });
            // eslint-disable-next-line
            const res = await fetch (`http://localhost:8000/api/messages` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversationId: messages?.conversationId,
                    senderId: user?.id,
                    message,
                    receiverId: messages?.receiver?.receiverId
                })
            });
            setMessage('');
        };

 return (
    <div className='w-screen h-full flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex mx-10 items-center my-8'>
                <div className='border border-primary p-[0.1px]  rounded-full'>
                    <img src={Avatar} width={50} height={50} alt='profile' />
                </div>
                <div className='ml-4'>
                    <h3 className='text-xl'>{user?.fullName}</h3>
                    <h3 className='text-lg font-light'>Profile</h3>
                </div>
            </div>
            <hr/>
            <div className='mx-10'>
                <div className='font-semibold text-xl mt-2 text-primary'>Messages</div>
                <div>
                    {
                      
                      conversations.length > 0 ?
                      conversations.map(({conversationId, user}) => {
                        return(
                        <>
                            <div className='flex  items-center my-3 border-b border-b-gray-300 py-2'>
                                <div className='cursor-pointer flex items-center' onClick={() => fetchMessages(conversationId , user)}>
                                    <div className=' p-[0.1px]  rounded-full'>
                                        <img src={Avatar} width={35} height={35} alt='profile' />
                                    </div>
                                    <div className='ml-4'>
                                        <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                                        <h3 className='text-sm font-light text-gray-500'>{user?.email}</h3>
                                    </div>
                                </div>

                                {/* Trash box */}
                                <div className='ml-20 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                                </div>
                            </div>
                        </>

                        )
                    }) : <>
                            <div className='text-center text-xl font-extrabold mt-24'>: / </div>
                            <div className='text-center text-xl font-bold mt-auto text-gray-700'>No Conversations</div>
                        </>
                    }
                </div>
            </div>
        </div>
        <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
            { messages?.receiver?.fullName 
              && <div className='bg-secondary h-[60px] my-12 w-[75%] rounded-full flex items-center px-10 '>
                    <div className='cursor-pointer'><img src={Avatar} width={35} height={35} alt='profile' /></div>
                    <div className='ml-4 mr-auto'>
                        <h3 className='text-md font-semibold mt-1'>{messages.receiver.fullName}</h3>
                        <h3 className='text-sm font-light text-gray-500 '>{messages.receiver.email}</h3>
                    </div> 
                    <div className='cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 9l5 -5"></path>
                        <path d="M16 4l4 0l0 4"></path>
                    </svg>
                    </div>                                       
            </div> } 
            <div className='w-full h-[75%]  overflow-y-scroll no-scrollbar shadow-sm'>
                    <div className='px-8 py-12'>
                    {    //
                    //
                    messages?.messages?.length > 0 ?
								messages.messages.map(({ message, user: { id } = {} }) => {
									return (
                                        <>
										<div className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${id === user?.id ? 
                                            'bg-primary rounded-t-xl rounded-bl-xl ml-auto p-2 text-white mb-4  ' : 'bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'} `}>
                                                {message}</div>   
                                        <div ref={messageRef}></div>
                                        </>
       
									)
								}) : <div className='text-center text-xl font-bold mt-40 text-gray-800'> : / No Messages <p>Or</p> <p> No Conversation Selected !</p></div>
						}
 
                    </div>
            </div>
            {   messages?.receiver?.fullName &&
                <div className=' p-8 w-full flex flex-row justify-center items-center'>
               <Input placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} className='w-[75%] ml-0' inputClassName='p-2 px-2 border-0 shadow-xl rounded-full bg-secondary outline-none focus:ring-0 focus:border-0'/>
               
               <div className={`ml-4 p-2 rounded-lg bg-white mt-5  cursor-pointer ${!message ? 'pointer-events-none' : ''}`} onClick={() => sendMessage()}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="24" height="24" 
                    viewBox="0 0 24 24" strokeWidth="1.2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14l11 -11"></path>
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                </div>
               <div className=' rounded-lg bg-white mt-5 ml-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="24" height="24"         viewBox="0 0 24 24" strokeWidth="1.2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M9 12h6"></path>
                    <path d="M12 9v6"></path>
                </svg>
               </div>
            </div>
            }
        </div>
        <div className='w-[25%] h-screen bg-light overflow-y-scroll no-scrollbar shadow-sm'>
        <div className='font-semibold text-xl mt-20 mx-10 text-primary'>Peoples</div>
        <div className='px-8'>
                    {
                      
                      users.length > 0 ?
                      users.map(({userId, user}) => {
                        return(
                        <>
                            <div className='flex  items-center my-3 border-b  border-b-gray-300 py-2'>
                                <div className='cursor-pointer flex items-center' onClick={() => fetchMessages('new' , user)}>
                                    <div className=' p-[0.1px]  rounded-full'>
                                        <img src={Avatar} width={35} height={35} alt='profile' />
                                    </div>
                                    <div className='ml-4'>
                                        <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                                        <h3 className='text-sm font-light text-gray-500'>{user?.email}</h3>
                                    </div>
                                </div>
                            </div>
                        </>

                        )
                    }) : <>
                            <div className='text-center text-xl font-extrabold mt-24'>: / </div>
                            <div className='text-center text-xl font-bold mt-auto text-gray-700'>Their is none of any other than you on this platform !</div>
                        </>
                    }
                </div>
        </div>
    </div>
  )
}

export default Dashboard
