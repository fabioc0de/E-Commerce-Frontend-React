import Brand from '../ui/Brand';
import SearchBar from '../ui/SearchBar';
import NavBar from '../ui/NavBar';


export default function Header() {
	return (
		<header className="bg-[#2e6ae2] text-white py-[5px] shadow-[0_4px_24px_0_rgba(36,70,169,0.18),0_2px_12px_0_rgba(0,0,0,0.12)] sticky top-0 z-10">
			<div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-2 md:gap-0 px-[15px] max-w-full m-0 relative">
				<div className="w-full md:w-auto flex justify-between items-center">
					<Brand />
				</div>
				<SearchBar />
				<NavBar />
			</div>
		</header>
	);
}
