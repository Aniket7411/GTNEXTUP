import React from "react";
import Link from "next/link";

const CookiesPolicy = () => {
    return (
        <div className="p-5 mt-[60px] bg-[#000] text-[#fff] px-6 lg:px-12">

            <h1 className="text-3xl text-[#FDEF9E]  md:text-4xl mt-3 font-bold mb-2">Cookies Policy</h1>

            <p className="mb-2">
                This Cookies Policy explains what Cookies are and how We use them. You should read
                this policy so You can understand what type of cookies We use, or the information We
                collect using Cookies and how that information is used.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-medium mb-2">Interpretation</h3>
            <p className="mb-6">
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning regardless
                of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-medium mb-2">Definitions</h3>
            <ul className="list-disc ml-6 mb-6">
                <li>
                    <strong>Company:</strong> Refers to Getraise Private Limited, 70/38, Patel Marg,
                    Mansarovar, Jaipur.
                </li>
                <li>
                    <strong>Cookies:</strong> Small files placed on Your device by a website, containing
                    details of your browsing history and other uses.
                </li>
                <li>
                    <strong>Website:</strong> Getraise Technologies, accessible from{" "}
                    <a
                        href="https://www.getraisetechnologies.com"
                        className="text-blue-500 underline"
                    >
                        https://www.getraisetechnologies.com
                    </a>
                </li>
                <li>
                    <strong>You:</strong> The individual accessing or using the Website, or a company or
                    legal entity on behalf of which such individual is accessing or using the Website.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Type of Cookies We Use</h2>
            <p className="mb-6">
                Cookies can be \"Persistent\" or \"Session\" Cookies. Persistent Cookies remain on your
                device when offline, while Session Cookies are deleted when you close your browser.
            </p>

            <h3 className="text-xl font-medium mb-2">Necessary / Essential Cookies</h3>
            <p className="mb-4">
                These Cookies are essential for providing You with services available through the Website
                and to enable You to use some of its features.
            </p>

            <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
            <p className="mb-6">
                These Cookies allow us to remember choices You make, such as remembering your login
                details or language preferences.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Your Choices Regarding Cookies</h2>
            <p className="mb-6">
                If You prefer to avoid the use of Cookies on the Website, You must disable them in your
                browser settings. Please note, some features of the Website may not function properly
                without Cookies.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
                If you have any questions about this Cookies Policy, you can contact us by email at{" "}
                <a href="mailto:info@getraisetechnologies.com" className="text-blue-500 underline">
                    info@getraisetechnologies.com
                </a>
                .
            </p>

            {/* Related Pages Navigation */}
            <section className="w-full mt-8 mb-4 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FDEF9E]">Related Policies</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/privacy_policy" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                        <h4 className="font-semibold text-lg mb-2 text-white">Privacy Policy</h4>
                        <p className="text-sm text-gray-300">Learn about our privacy practices and data collection</p>
                    </Link>
                    <Link href="/" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                        <h4 className="font-semibold text-lg mb-2 text-white">Home</h4>
                        <p className="text-sm text-gray-300">Return to our homepage</p>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default CookiesPolicy;
