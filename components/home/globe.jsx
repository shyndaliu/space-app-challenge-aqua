export default function Globe() {
    return <>
        <div id="globe" className="w-full relative flex justify-center  bg-gray-700 z-20 py-10 px-5 ">
            <div className="px-auto">
                <p className="mx-auto pt-5 text-8xl text-gray-100">
                    Introducing you The Globe...
                </p>
                <p className="mx-auto px-auto py-10 text-white">Explore the incredible world of water like never before! Our interactive map feature lets you embark on a unique journey. Pick a water source on the map, whether it's a sparkling river, a serene lake, or even a gushing waterfall, and engage in a virtual conversation with it. Learn about its ecosystem, the creatures that call it home, and the vital role it plays in our environment. Get ready to dive deep into the heart of water sources and discover the stories they have to share. Let's begin this exciting adventure!</p>

                <iframe src="https://globus-nasa.vercel.app/" width="100%" height="1000"></iframe>
            </div>
        </div>
    </>
}