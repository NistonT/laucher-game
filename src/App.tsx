import bg from "@public/image/bg-game/1581910827_vsthemes_ru-1.jpg";
import { Swords } from "lucide-react";
import "./App.css";

function App() {
	// async function greet() {
	// 	setGreetMsg(await invoke("greet", { name }));
	// }

	// async function close() {
	// 	return await getCurrentWindow().minimize();
	// }

	return (
		<>
			<div className='flex absolute z-10 top-0 left-0 w-full h-full'>
				<div className='h-screen bg-black w-2/12'>
					<h1 className='font-bold text-white px-4 py-2 text-2xl'>
						VortexFlow
					</h1>
				</div>

				<div className='p-4 relative w-10/12'>
					<div className='absolute right-10 bottom-10'>
						<button
							type='button'
							className='bg-black text-white font-black text-2xl px-6 py-4 rounded-2xl flex items-center gap-4'
						>
							<Swords />
							<span>Start game</span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<img src={bg} alt='bg' className='absolute h-screen w-screen' />
			</div>
		</>
	);
}

export default App;
