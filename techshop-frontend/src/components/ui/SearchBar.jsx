
import searchIcon from '../../assets/search-icon.png';

export default function SearchBar() {
	return (
		<div className="flex justify-between bg-white rounded-[15px] px-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] w-full max-w-[400px] max-h-[32px] my-0 mx-[20px] flex-shrink">
			<input
				type="text"
				placeholder="Buscar en TechShop"
				className="border-none outline-none py-[6px] px-[9px] rounded-[12px] text-[0.9rem] w-full min-w-0"
			/>
			<button
				className="bg-[#48e] border-none rounded-[12px] py-[2px] px-[3px] cursor-pointer transition-colors duration-200 ml-[8px] my-[3px] min-w-[35px] hover:bg-[#2e6ae2] flex items-center justify-center"
				type="submit"
			>
				<img src={searchIcon} alt="Buscar" className="max-w-[20px] max-h-[20px] align-middle" />
			</button>
		</div>
	);
}
