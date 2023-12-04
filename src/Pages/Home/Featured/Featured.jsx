import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed pt-6 py-20">
            <div className="bg-slate-500 bg-opacity-40 h-full">
                <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
                <div className="md:flex justify-center items-center  md:pb-20 pb-16 pt-8 md:pt-12 px-28 md:px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can I get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit perferendis id temporibus neque placeat porro aspernatur? Natus, a necessitatibus atque vitae nesciunt accusantium voluptate quisquam veritatis quae reiciendis fugit laboriosam mollitia eius at ea officia? Error quibusdam ipsa doloribus illum nam, maxime assumenda eveniet modi unde neque quae minus.</p>
                        <button className="btn btn-outline border-0 border-b-4 rounded-none mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;