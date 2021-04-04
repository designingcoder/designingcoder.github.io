export default function Home() {
  return (
    <div className="grid grid-cols-12 justify-self-center">
      <title>Designing Coder</title>
      <div className="col-span-2 sm:inline-block hidden"></div>
      <div className="col-span-12 mx-5 md:col-span-8 sm:mx-0">
        <img
          src="images/designingcoder-banner.png"
          className="lg:w-2/6 w-4/5 mx-auto mt-10 md:mb-16 mb-12"
        />
        <div className="lg:flex justify-around">
          <a href="https://www.instagram.com/designingcoder"><div className="social-tab">Instagram</div></a>
           <a href="https://www.facebook.com/designingcoder"><div className="social-tab">Facebook</div></a>
           <a href="https://www.youtube.com/channel/UC1yeo6Yaq9JHkSQ8SBRnZjw"><div className="social-tab">YouTube</div></a>
        </div>
        <div className="lg:flex justify-around">
           <a href="https://dev.to/designingcoder"><div className="social-tab">Dev</div></a>
           <a href="https://designingcoder.medium.com"><div className="social-tab">Medium</div></a>
           <a href="https://hashnode.com/@designingcoder"><div className="social-tab">Hashnode</div></a>
        </div>
        <div className="lg:flex justify-around">
           <a href="https://www.codepen.com/designingcoder"><div className="social-tab">CodePen</div></a>
        </div>
      </div>
      <div className="col-span-2 hidden sm:inline-block"></div>
    </div>
  )
}
