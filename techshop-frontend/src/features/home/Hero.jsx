import bannerImg from '../../assets/banner_2.png';

export default function Hero() {
	return (
		<section className="py-5 bg-gradient-to-br from-[#98c7f8] to-[#f0f6fe] min-h-[calc(100vh-60px)] flex items-center">
			<div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5">
				<div className="pr-5">
					<h1 className="text-black font-bold leading-tight mb-5 text-[clamp(2rem,5vw,3.5rem)]">
						Bienvenido a TechShop
					</h1>
					<p className="text-black/70 mb-8 leading-relaxed text-[clamp(1rem,2vw,1.2rem)]">
						Descubre las mejores ofertas en dispositivos electrónicos. Hasta <span className="text-[#2e6ae2] font-bold">50% de descuento</span> en productos seleccionados.
					</p>
					<div className="mt-8 relative">
						<a href="#offers" className="inline-block py-4 px-8 bg-[#48e] text-white no-underline rounded-[25px] font-bold text-[1.1rem] transition-all duration-300 hover:bg-[#2e6ae2] hover:-translate-y-0.5">
							Ver Ofertas
						</a>
					</div>
				</div>
				<div className="w-full max-w-[600px] mx-auto">
					<img src={bannerImg} alt="Últimas ofertas en tecnología" className="w-full h-auto object-cover rounded-[20px]" />
				</div>
			</div>
		</section>
	);
}
