import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsPage() {

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="container max-w-4xl mx-auto py-12 px-6">
				<h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
				<p className="text-white mb-8">
					These terms govern your use of the site. Please read them carefully.
				</p>

				<ol className="list-decimal list-inside space-y-8">
					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Use of the Website
						</h2>
						<p className="text-white">
							By accessing this website you agree not to misuse it.
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Privacy Policy
						</h2>
						<p className="text-white">
							Any personal information collected will be handled in accordance with our privacy practices.
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Enforcement
						</h2>
						<p className="text-white">
							Violations of these terms may result in termination of access.
						</p>
					</li>
				</ol>

				<p className="text-sm text-white mt-8">
					Last updated: January 1, 2025. Contact us at 
					<Link href="/contacts" className="text-blue-500 hover:underline">
						http://okitha.al@gmail.com
					</Link>
					.
				</p>
			</main>
			<Footer />
		</div>
	);
}

