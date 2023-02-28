import homeImg from  "../Assets/img/home.webp"

const Aboutme = () => {
    return (
        <>
        <div className="bg-slate-900">
        <div
            className=" flex justify-center items-center flex-col md:flex-row-reverse xl:min-h-screen md:mx-20 xl:mx-52 text-slate-100">

            <img src={homeImg} alt="Pankaj Kumar" className=" md:h-72 lg:h-[700px] max-sm:hidden"/>
            <div className="flex flex-col p-6 md:p-10 ">


                <h1 className="text-2xl mx-auto font-mono">Hi, It's Me</h1>

                <h1
                    className="text-sky-500 mx-auto text-4xl xl:text-6xl font-extrabold my-5">
                    PANKAJ KUMAR</h1>

                <h2 className="text-sm mx-auto lg:text-2xl font-bold mt-1 font-mono">Web Developer, Open Source</h2>

                <p className="xl:text-lg my-3 lg:my-6 text-justify lg:text-justify">I am a Web Developer and
                    Programmer. I am
                    currently pursuing my
                    B.Tech in
                    Computer
                    Science and Engineering from Marwadi Education Foundation's Group of Institutions (Affiliated to
                    Gujarat Technological University). I am a self-taught programmer and I am passionate about Web
                    Development and Programming. I am also a tech enthusiast and I love to learn new technologies and I
                    am
                    always ready to learn new things.</p>
                <div className="flex my-4 lg:my-1 mx-auto">
                    <a href="https://www.linkedin.com/in/pankajktech/"
                        className="rounded-sm flex items-center justify-center bg-slate-200 w-36 xl:w-60 h-10 m-1 mr-2 xl:m-5 text-lg xl:text-2xl font-bold text-slate-900 duration-300  p-2 drop-shadow-2xl shadow-lg shadow-slate-800 hover:scale-90">
                        <i className="devicon-linkedin-plain colored mr-2 lg:m-4"></i>
                        LINKEDIN </a>

                    <a href="https://drive.google.com/file/d/1Aa1GoCjaPd2WUMESN_8j6q9KfM1Vl-iL/view" target="_blank"
                        className="rounded-sm flex items-center justify-center bg-slate-200 w-36 xl:w-60 h-10 m-1 ml-2 xl:m-5 text-lg xl:text-2xl font-bold text-slate-900 duration-300 p-2 drop-shadow-2xl shadow-lg shadow-slate-800 hover:scale-90"><i
                            className="fa-solid fa-paperclip m-2 lg:m-4"></i> RESUME </a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Aboutme;