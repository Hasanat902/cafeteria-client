import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <section className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 31, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facere! Provident nihil, aut voluptas quas ut neque blanditiis recusandae expedita alias at! Dignissimos adipisci id quaerat, magnam veniam deserunt officiis suscipit voluptatum nihil ab deleniti voluptate tempora aut non officia dolores recusandae soluta quas at dicta! Quisquam ipsam praesentium unde.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;