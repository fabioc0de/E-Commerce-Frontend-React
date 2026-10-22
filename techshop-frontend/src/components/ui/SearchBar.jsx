
import { Search } from 'lucide-react';

export default function SearchBar() {
	return (
		<div className="flex w-full items-center gap-2 bg-[#4488ee] rounded-[10px] px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] h-9 my-0">
			<button
				className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white transition-opacity duration-200 hover:opacity-90"
				type="submit"
				aria-label="Buscar"
			>
				<Search size={17} className="text-white" />
			</button>

			<input
				type="text"
				placeholder="Buscar en TechShop"
				className="border-none bg-transparent outline-none text-white placeholder:text-white/80 py-1.5 text-[0.9rem] w-full min-w-0 font-medium"
			/>
		</div>
	);
}
