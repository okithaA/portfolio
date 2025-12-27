import Footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function TermsPage() {
	return (
		<div>
			<Navbar />
			<main className="container max-w-4xl mx-auto py-12 px-6">
				<h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
				<p className="text-slate-600 mb-8">
					By accessing or using this website, you agree to comply with the following Terms of Service.
				</p>

				<ol className="list-decimal list-inside space-y-8">
					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Use of Website Resources
						</h2>
						<p className="text-white">
							All resources, content, and materials available on this website are owned by and intended for the exclusive use of the website owner. These resources may not be copied, shared, distributed, or disclosed to any third party without prior written permission from the user, as this website is based on an individual.
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Privacy and Confidentiality
						</h2>
						<p className="text-white">
							User privacy must be strictly respected and maintained. Any unauthorized use, disclosure, or violation of privacy will be considered a breach of these Terms of Service. In such cases, the website owner reserves the right to take appropriate action as permitted under applicable laws.
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							Enforcement of Terms
						</h2>
						<p className="text-white">
							Failure to comply with these Terms of Service may result in restricted access, termination of use, or other actions deemed necessary by the website owner to protect their rights and privacy.
						</p>
					</li>
				</ol>

				<p className="text-sm text-white mt-8">
					Last updated December 27, 2025. 
					<Link href="/contacts" className="text-blue-500 hover:underline">
						the contact page
					</Link>
					.
				</p>
			</main>
			<Footer />
		</div>
	);
}

