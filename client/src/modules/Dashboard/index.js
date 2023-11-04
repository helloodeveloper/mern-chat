import Avatar from '../../assests/Avatar.svg'
import Input from '../../components/Input'

const Dashboard = () => {
        const contact = [
            {
                name: 'John',
                status: 'Available',
                img: Avatar
            },
            {
                name: 'Mary',
                status: 'Available',
                img: Avatar
            },{
                name: 'Alice',
                status: 'Available',
                img: Avatar
            },{
                name: 'Alex',
                status: 'Available',
                img: Avatar
            },{
                name: 'Adam',
                status: 'Available',
                img: Avatar
            },{
                name: 'Linda',
                status: 'Available',
                img: Avatar
            }
        ]
  return (
    <div className='w-screen h-full flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex mx-10 items-center my-8'>
                <div className='border border-primary p-[0.1px]  rounded-full'>
                    <img src={Avatar} width={50} height={50} alt='profile' />
                </div>
                <div className='ml-4'>
                    <h3 className='text-xl'>Ankit Yadav</h3>
                    <h3 className='text-lg font-light'>Profile</h3>
                </div>
            </div>
            <hr/>
            <div className='mx-10'>
                <div className='font-semibold text-xl mt-2 text-primary'>Messages</div>
                <div>
                    {contact.map(({name,status,img}) => {
                        return(
                        <>
                            <div className='flex  items-center my-3 border-b border-b-gray-300 py-2'>
                                <div className='cursor-pointer flex items-center'>
                                    <div className=' p-[0.1px]  rounded-full'>
                                        <img src={img} width={35} height={35} alt='profile' />
                                    </div>
                                    <div className='ml-4'>
                                        <h3 className='text-lg font-semibold'>{name}</h3>
                                        <h3 className='text-sm font-light text-gray-500'>{status}</h3>
                                    </div>
                                </div>
                            </div>
                        </>

                        )
                    })
                    }
                </div>
            </div>
        </div>
        <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
            <div className='bg-secondary h-[60px] my-12 w-[75%] rounded-full flex items-center px-10 '>
                    <div className='cursor-pointer'><img src={Avatar} width={35} height={35} alt='profile' /></div>
                    <div className='ml-4 mr-auto'>
                        <h3 className='text-md font-semibold mt-1'>Alexender</h3>
                        <h3 className='text-sm font-light text-gray-500 '>online</h3>
                    </div> 
                    <div className='cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 9l5 -5"></path>
                        <path d="M16 4l4 0l0 4"></path>
                    </svg>
                    </div>                                       
            </div>
            <div className='w-full h-[75%]  overflow-y-scroll no-scrollbar shadow-sm'>
                    <div className='px-8 py-12'>
                        <div className=' max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[50%] bg-primary rounded-t-xl rounded-bl-xl ml-auto p-2 text-white mb-4'>
                        Lorem Ipsum is simply dummy text .
                        </div>
                        <div className=' max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[50%] bg-primary rounded-t-xl rounded-bl-xl ml-auto p-2 text-white mb-4'>
                        Lorem Ipsum is simply dummy text .
                        </div>
                        <div className=' max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[50%] bg-primary rounded-t-xl rounded-bl-xl ml-auto p-2 text-white mb-4'>
                        Lorem Ipsum is simply dummy text .
                        </div>
                        <div className=' max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[50%] bg-primary rounded-t-xl rounded-bl-xl ml-auto p-2 text-white mb-4'>
                        Lorem Ipsum is simply dummy text .
                        </div>
                    </div>
            </div>
            <div className=' p-8 w-full flex flex-row justify-center items-center'>
               <Input placeholder='Enter your message...' className='w-[75%] ml-0' inputClassName='p-2 px-2 border-0 shadow-xl rounded-full bg-secondary outline-none focus:ring-0 focus:border-0'/>
               <div className='ml-4 p-2 rounded-lg bg-white mt-5  cursor-pointer'>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="1.2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14l11 -11"></path>
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
               </div>
               <div className=' rounded-lg bg-white mt-5  cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="24" height="24"         viewBox="0 0 24 24" stroke-width="1.2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M9 12h6"></path>
                    <path d="M12 9v6"></path>
                </svg>
               </div>
            </div>
        </div>
        <div className='w-[25%] h-screen bg-light '></div>
    </div>
  )
}

export default Dashboard
