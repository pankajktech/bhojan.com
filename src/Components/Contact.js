const Contact = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row justify-center items-center lg:my-10 lg:mx-52 min-h-[75vh]">
        <div class="bg-slate-200 text-slate-900 lg:mr-10 w-[100%] lg:w-1/2 flex flex-col h-[480px] text-2xl drop-shadow-2xl border-b-2 border-b-sky-600 lg:border-none p-10 justify-center items-center">
          <p class="mx-auto">Contact Information</p>

          <div class="my-6">
            <div class="my-8">
              <i class="fa-solid fa-map-marker-alt fa-md"></i>
              <label>Address:</label>
              <span class="text-sky-500 hover:text-teal-700">
                Gujarat, India
              </span>
            </div>
            <div class="my-8">
              <i class="fa-solid fa-envelope fa-md"></i>
              <label>Email:</label>
              <a
                href="mailto:tunewithpa@gmail.com"
                class="text-sky-500 hover:text-teal-700"
              >
                tunewithpk@gmail.com
              </a>
            </div>
          </div>
          <div class="mx-auto mt-auto">
            <a
              href="https://www.github.com/pankajktech/"
              target="_blank"
              class="m-2 xl:m-4"
            >
              <i class="fa-brands fa-github hover:scale-125 duration-300"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pankajktech/"
              target="_blank"
              class="m-2 xl:m-4"
            >
              <i class="fa-brands fa-linkedin hover:scale-125 duration-300 text-sky-700"></i>
            </a>
            <a
              href="https://www.twitter.com/pankajthakuroff/"
              target="_blank"
              class="m-2 xl:m-4"
            >
              <i class="fa-brands fa-twitter hover:scale-125 duration-300 text-sky-500"></i>
            </a>
            <a
              href="https://www.instagram.com/pankajthakuroff/"
              target="_blank"
              class="m-2 xl:m-4"
            >
              <i class="fa-brands fa-instagram hover:scale-125 duration-300 text-red-500"></i>
            </a>
            <a href="https://youtube.com/@techypkt" target="_blank" class="m-2">
              <i class="fa-brands fa-youtube hover:scale-125 duration-300 text-red-600"></i>
            </a>
          </div>
        </div>

        <div class="bg-slate-200 w-[100%] lg:w-1/2 h-[480px]  lg:my-10 flex justify-center items-center drop-shadow-2xl">
          <div class="h-auto flex flex-col mx-auto justify-center items-center">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              class="h-10 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[500px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              class="h-10 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[500px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
            />

            <textarea
              name=""
              rows="10"
              aria-setsize="fixed"
              required
              class="h-52 rounded-sm placeholder:text-slate-800 block focus:shadow-lg focus:shadow-blue-400 w-[300px] md:w-[500px] py-2 focus:outline-none focus:ring-border-gray-900 ring-1 ring-slate-400 px-4 focus:ring-1 focus:ring-slate-800 sm:text-sm my-3"
              placeholder="Enter Your Message"
            ></textarea>

            <div class="mx-auto">
              <input
                type="submit"
                value="Send Message"
                class="rounded-sm text-2xl bg-gray-800 text-slate-200 w-[300px] lg:w-52 h-10 mx-auto my-6 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
