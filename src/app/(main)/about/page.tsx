export default function AboutPage() {
    return (
        <section className='container mx-auto xl:px-20 duration-300'>
            <div>
                <h1 className="font-medium">We are located at:</h1>
                <p>- 2/F Commercenter Building 2, Filinvest Ave cor. Commerce Ave and East Asia Drive, Filinvest Corporate City Alabang</p>

                <div className="my-4 flex items-center justify-center">
                <iframe
                    title="Vmeme Alabang"
                    width="75%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5464.707416212003!2d121.03301476067325!3d14.419572207884674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d034824c6ea9%3A0x94d7e4c85cd48bbf!2sVmeme%20Contemporary%20Art%20Gallery!5e0!3m2!1sen!2sph!4v1701097998561!5m2!1sen!2sph"
                    allowFullScreen
                ></iframe>
                </div>

                <p>- 3/F Estancia Mall East Wing, Capitol Commons, Pasig City</p>

                <div className="my-4 flex items-center justify-center">
                <iframe
                    title="Vmeme Pasig"
                    width="75%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123608.30992246057!2d120.96492535493566!3d14.498480438260916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b71815e90439%3A0xb68d61e77f15da93!2svMeme%20Contemporary%20Art%20Gallery!5e0!3m2!1sen!2sph!4v1701098263032!5m2!1sen!2sph"
                    allowFullScreen
                ></iframe>
                </div>

                <div className="my-4">
                    <p className="font-medium">For inquiries:</p>
                    <p>Contact: URIAH CARLOS - <a href="tel:09175798768" className="text-primary">09175798768</a> (text and viber)</p>
                    <p>Email: <a href="mailto:vmemecontemporary@gmail.com" className="text-primary">vmemecontemporary@gmail.com</a></p>
                </div>
            </div>
        </section>
      );
}
