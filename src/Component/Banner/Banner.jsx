import bannerBook from '../../assets/images/banner-book.png'

const Banner = () => {
  return (
    <div className='mt-10'>
      <div className="hero h-[560px] bg-[#1313130D] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerBook}
            className="max-w-sm rounded-lg "
          />
          <div className="w-1/2 space-y-5">
            <h1 className="text-5xl font-bold leading-[80px]">Books to freshen up your bookshelf</h1>
            
            <button className="btn bg-[#23BE0A] text-white">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
