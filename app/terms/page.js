import Footer from "../components/Footer";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function TermsPage() {
	const t = useTranslations('terms');

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="container max-w-4xl mx-auto py-12 px-6">
				<h1 className="text-4xl font-bold text-white mb-4">{t('title')}</h1>
				<p className="text-white mb-8">
					{t('intro')}
				</p>

				<ol className="list-decimal list-inside space-y-8">
					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							{t('sections.use.title')}
						</h2>
						<p className="text-white">
							{t('sections.use.description')}
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							{t('sections.privacy.title')}
						</h2>
						<p className="text-white">
							{t('sections.privacy.description')}
						</p>
					</li>

					<li>
						<h2 className="text-2xl font-semibold text-white mb-2">
							{t('sections.enforcement.title')}
						</h2>
						<p className="text-white">
							{t('sections.enforcement.description')}
						</p>
					</li>
				</ol>

				<p className="text-sm text-white mt-8">
					{t('lastUpdated')}
					<Link href="/contacts" className="text-blue-500 hover:underline">
						{t('contactLink')}
					</Link>
					.
				</p>
			</main>
			<Footer />
		</div>
	);
}

