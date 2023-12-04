import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import rating styles
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What our client say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => (<SwiperSlide
                        key={review._id}
                    >
                        <div className="m-24 my-16 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;