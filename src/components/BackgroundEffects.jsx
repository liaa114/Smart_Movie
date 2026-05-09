export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff9bd233_0%,#000000_55%)]"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#FF9BD2]/20 rounded-full blur-3xl"></div>

      <div className="absolute top-[40%] right-[-100px] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] left-[30%] w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

      <div className="absolute inset-0 backdrop-blur-[3px]"></div>
    </>
  )
}