export default function NasaVideo() {
    return <>
        <div id="test" className="w-full relative h-screen bg-violet-300 z-20 py-10 px-5 ">
            <div className="absolute  left-1/4 right-1/4">
                <p className="mx-auto pt-5 text-8xl text-violet-950">
                    Let's watch some video...
                </p>
                <p className="py-5">
                    that water is very important here you can see how blah blah blah
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2oKYXKKf28g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </>
}