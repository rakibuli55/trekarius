import AuthImg from '../../assets/images/authImg.png'

function AuthImage() {
  return (
    <div className='h-[662px] custom-xl:h-[580px]'>
        <img className='h-full w-full object-cover rounded-[32px]' src={AuthImg} alt="AuthImg" />
    </div>
  )
}

export default AuthImage