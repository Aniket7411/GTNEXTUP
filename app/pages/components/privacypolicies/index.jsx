import Link from "next/link";

const Privacypolicies = () => {
    return (
        <div className="flex flex-col bg-[#000] text-[#fff]  mt-[60px] p-5 px-6 lg:px-12 ">
            {/* Page Heading */}
            <h1 className="text-2xl text-[#FDEF9E] md:text-4xl font-bold mb-1">
                Privacy Policy
            </h1>

            {/* Section: What is Generative AI */}
            <section className="w-full  mb-4">
                <p className="text-base md:text-lg text-justify">
                    This Privacy Policy describes Our policies and procedures on the collection, use and
                    disclosure of Your information when You use the Service and tells You about Your privacy
                    rights and how the law protects You.
                    We use Your Personal data to provide and improve the Service. By using the Service, You
                    agree to the collection and use of information in accordance with this Privacy Policy. This
                    Privacy Policy has been created with the help of the Privacy Policy Generator.
                </p>

            </section>

            {/* Section: How Generative AI Works */}
            <section className="w-full mb-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
                <p className="text-base md:text-lg text-justify">
                    The words of which the initial letter is capitalized have meanings defined under the
                    following conditions. The following definitions shall have the same meaning regardless of
                    whether they appear in singular or in plural.
                </p>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Interpretation and Definitions</h2>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium">Interpretation</h3>
                        <p>
                            The words with capitalized initial letters have specific meanings as defined under
                            the following conditions. These definitions apply uniformly, regardless of whether the
                            terms appear in singular or plural forms.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium">Definitions</h3>
                        <ul className="list-disc pl-6">
                            <li>
                                <strong>Account:</strong> A unique account created for You to access our Service or
                                parts of our Service.
                            </li>
                            <li>
                                <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under
                                common control with a party, where "control" refers to ownership of 50% or more of
                                the shares, equity interest, or other securities entitled to vote for election of
                                directors or other managing authority.
                            </li>
                            <li>
                                <strong>Company:</strong> Referred to as either "the Company," "We," "Us," or "Our"
                                in this Agreement, the term refers to Getraise Private Limited, 70/38, Patel Marg,
                                Mansarovar, Jaipur, India.
                            </li>
                            <li>
                                <strong>Cookies:</strong> Small files placed on Your computer, mobile device, or any
                                other device by a website, containing details of Your browsing history on that
                                website and serving various purposes.
                            </li>
                            <li>
                                <strong>Country:</strong> Refers to Rajasthan, India.
                            </li>
                            <li>
                                <strong>Device:</strong> Any device that can access the Service, such as a computer,
                                cellphone, or digital tablet.
                            </li>
                            <li>
                                <strong>Personal Data:</strong> Any information that relates to an identified or
                                identifiable individual.
                            </li>
                            <li>
                                <strong>Service:</strong> Refers to the Website.
                            </li>
                            <li>
                                <strong>Service Provider:</strong> Any natural or legal person who processes the
                                data on behalf of the Company. This refers to third-party companies or individuals
                                employed by the Company to facilitate the Service or to assist in analyzing how the
                                Service is used.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Data collected automatically, either generated by the
                                use of the Service or from the Service infrastructure itself (e.g., the duration of
                                a page visit).
                            </li>
                            <li>
                                <strong>Website:</strong> Refers to Getraise Technologies, accessible from{" "}
                                <a
                                    href="https://www.getraisetechnologies.com"
                                    className="text-blue-600 underline"
                                >
                                    https://www.getraisetechnologies.com
                                </a>
                                .
                            </li>
                            <li>
                                <strong>You:</strong> The individual accessing or using the Service, or the company,
                                or other legal entity on behalf of which such individual is accessing or using the
                                Service, as applicable.
                            </li>
                        </ul>
                    </div>


                    <div className="p-4 flex flex-col items-center  ">
                        <div className=" w-full">
                            <h2 className="text-2xl font-bold mb-4">Collecting and Using Your Personal Data</h2>

                            {/* Types of Data Collected */}
                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>

                                {/* Personal Data */}
                                <div className="mb-4">
                                    <h4 className="text-lg font-medium mb-1">Personal Data</h4>
                                    <p className="mb-2">
                                        While using Our Service, We may ask You to provide Us with certain personally
                                        identifiable information that can be used to contact or identify You. Personally
                                        identifiable information may include, but is not limited to:
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li>Email address</li>
                                        <li>First name and last name</li>
                                        <li>Phone number</li>
                                        <li>Address, State, Province, ZIP/Postal code, City</li>
                                    </ul>
                                </div>

                                {/* Usage Data */}
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Usage Data</h4>
                                    <p className="mb-2">
                                        Usage Data is collected automatically when using the Service. It may include:
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li>Your Device's Internet Protocol (IP) address</li>
                                        <li>Browser type and version</li>
                                        <li>Pages visited on our Service</li>
                                        <li>Time and date of Your visit</li>
                                        <li>Time spent on those pages</li>
                                        <li>Unique device identifiers</li>
                                        <li>Other diagnostic data</li>
                                    </ul>
                                    <p className="mt-2">
                                        When You access the Service through a mobile device, We may collect information
                                        such as:
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li>The type of mobile device You use</li>
                                        <li>Your mobile device unique ID</li>
                                        <li>Your mobile operating system</li>
                                        <li>The type of mobile Internet browser You use</li>
                                        <li>Unique device identifiers</li>
                                        <li>Other diagnostic data</li>
                                    </ul>
                                </div>


                            </section>

                            {/* Tracking Technologies and Cookies */}
                            <section>
                                <h3 className="text-xl font-semibold mb-2">Tracking Technologies and Cookies</h3>
                                <p className="mb-2">
                                    We use Cookies and similar tracking technologies to track activity on Our Service and
                                    store certain information. These technologies may include:
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>
                                        <strong>Cookies or Browser Cookies:</strong> A small file placed on Your Device. You
                                        can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being
                                        sent. However, if You do not accept Cookies, You may not be able to use some parts
                                        of our Service.
                                    </li>
                                    <li>
                                        <strong>Web Beacons:</strong> Small electronic files that permit the Company to count
                                        users who have visited certain pages or opened an email and for other related website
                                        statistics (e.g., recording popularity of sections).
                                    </li>
                                </ul>
                                <p>
                                    Cookies can be <strong>Persistent</strong> or <strong>Session</strong> Cookies. Persistent Cookies
                                    remain on Your computer or mobile device when You go offline, while Session Cookies are
                                    deleted as soon as You close Your web browser.
                                </p>
                            </section>
                        </div>
                    </div>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                        <p className="mb-4">
                            We use both Session and Persistent Cookies for the purposes set out below:
                        </p>
                        <div className="mb-4">
                            <h4 className="text-lg font-medium mb-1">Necessary / Essential Cookies</h4>
                            <p>
                                <strong>Type:</strong> Session Cookies<br />
                                <strong>Administered by:</strong> Us<br />
                                <strong>Purpose:</strong> These Cookies are essential to provide You with
                                services available through the Website and to enable You to use some of its
                                features. They help to authenticate users and prevent fraudulent use of user
                                accounts. Without these Cookies, the services that You have asked for cannot
                                be provided, and We only use these Cookies to provide You with those services.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-medium mb-1">Cookies Policy / Notice Acceptance Cookies</h4>
                            <p>
                                <strong>Type:</strong> Persistent Cookies<br />
                                <strong>Administered by:</strong> Us<br />
                                <strong>Purpose:</strong> These Cookies identify if users have accepted the
                                use of cookies on the Website.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-1">Functionality Cookies</h4>
                            <p>
                                <strong>Type:</strong> Persistent Cookies<br />
                                <strong>Administered by:</strong> Us<br />
                                <strong>Purpose:</strong> These Cookies allow us to remember choices You
                                make when You use the Website, such as remembering your login details or
                                language preference. The purpose of these Cookies is to provide You with a
                                more personal experience and to avoid You having to re-enter your
                                preferences every time You use the Website.
                            </p>
                        </div>
                        <p className="mt-4">
                            For more information about the cookies we use and your choices regarding
                            cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                        </p>
                    </section>

                    {/* Use of Personal Data */}
                    <section>
                        <h3 className="text-xl font-semibold mb-2">Use of Your Personal Data</h3>
                        <p className="mb-4">
                            The Company may use Personal Data for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>To provide and maintain our Service, including monitoring its usage.</li>
                            <li>
                                To manage Your Account: This allows access to different functionalities as
                                a registered user.
                            </li>
                            <li>
                                For the performance of a contract: Ensuring compliance and undertaking
                                purchase contracts or other agreements through the Service.
                            </li>
                            <li>
                                To contact You: This may include email, calls, SMS, or push notifications
                                related to updates, services, or security alerts.
                            </li>
                            <li>
                                To provide You with news, special offers, and information about other
                                goods and services similar to those You have purchased or enquired about.
                            </li>
                            <li>To manage Your requests: Address and resolve queries or requests.</li>
                            <li>
                                For business transfers: Use information during evaluations or transfers
                                like mergers, acquisitions, or restructuring.
                            </li>
                            <li>
                                For other purposes: Analyzing data, identifying usage trends, and
                                improving services, products, and marketing efforts.
                            </li>
                        </ul>

                        {/* Sharing Personal Data */}
                        <h4 className="text-lg font-medium mb-2">Sharing Your Personal Data</h4>
                        <ul className="list-disc pl-6">
                            <li>
                                <strong>With Service Providers:</strong> To monitor and analyze the use of our
                                Service or to contact You.
                            </li>
                            <li>
                                <strong>For business transfers:</strong> During negotiations or actual transfers
                                like mergers or sales.
                            </li>
                            <li>
                                <strong>With Affiliates:</strong> To ensure affiliates comply with this Privacy Policy.
                            </li>
                            <li>
                                <strong>With business partners:</strong> To offer products, services, or promotions.
                            </li>
                            <li>
                                <strong>With other users:</strong> Information shared publicly may be viewed
                                by others.
                            </li>
                            <li>
                                <strong>With Your consent:</strong> Personal information may be disclosed for
                                any other purpose with Your approval.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Retention of Your Personal Data
                        </h2>
                        <p className=" mt-2">
                            The Company will retain Your Personal Data only for as long as is
                            necessary for the purposes set out in this Privacy Policy. We will
                            retain and use Your Personal Data to the extent necessary to comply
                            with our legal obligations (for example, if we are required to
                            retain your data to comply with applicable laws), resolve disputes,
                            and enforce our legal agreements and policies.
                        </p>
                        <p className=" mt-2">
                            The Company will also retain Usage Data for internal analysis
                            purposes. Usage Data is generally retained for a shorter period of
                            time, except when this data is used to strengthen the security or to
                            improve the functionality of Our Service, or We are legally
                            obligated to retain this data for longer time periods.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Transfer of Your Personal Data
                        </h2>
                        <p className=" mt-2">
                            Your information, including Personal Data, is processed at the
                            Company&apos;s operating offices and in any other places where the
                            parties involved in the processing are located. It means that this
                            information may be transferred to — and maintained on — computers
                            located outside of Your state, province, country or other
                            governmental jurisdiction where the data protection laws may differ
                            than those from Your jurisdiction.
                        </p>
                        <p className=" mt-2">
                            Your consent to this Privacy Policy followed by Your submission of
                            such information represents Your agreement to that transfer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Delete Your Personal Data
                        </h2>
                        <p className=" mt-2">
                            You have the right to delete or request that We assist in deleting
                            the Personal Data that We have collected about You. Our Service may
                            give You the ability to delete certain information about You from
                            within the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Disclosure of Your Personal Data
                        </h2>
                        <p className=" mt-2">
                            Under certain circumstances, the Company may be required to disclose
                            Your Personal Data if required to do so by law or in response to
                            valid requests by public authorities (e.g., a court or a government
                            agency).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Security of Your Personal Data
                        </h2>
                        <p className=" mt-2">
                            The security of Your Personal Data is important to Us, but remember
                            that no method of transmission over the Internet, or method of
                            electronic storage is 100% secure. While We strive to use
                            commercially acceptable means to protect Your Personal Data, We
                            cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Children&apos;s Privacy
                        </h2>
                        <p className=" mt-2">
                            Our Service does not address anyone under the age of 13. We do not
                            knowingly collect personally identifiable information from anyone
                            under the age of 13. If You are a parent or guardian and You are
                            aware that Your child has provided Us with Personal Data, please
                            contact Us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Links to Other Websites
                        </h2>
                        <p className=" mt-2">
                            Our Service may contain links to other websites that are not
                            operated by Us. If You click on a third-party link, You will be
                            directed to that third party&apos;s site. We strongly advise You to
                            review the Privacy Policy of every site You visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">
                            Changes to this Privacy Policy
                        </h2>
                        <p className=" mt-2">
                            We may update Our Privacy Policy from time to time. We will notify
                            You of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold ">Contact Us</h2>
                        <p className=" mt-2">
                            If you have any questions about this Privacy Policy, You can contact
                            us by email: <a href="mailto:info@getraisetechnologies.com" className="text-blue-500 underline">info@getraisetechnologies.com</a>
                        </p>
                    </section>
                </section>



            </section>

            {/* Related Pages Navigation */}
            <section className="w-full mt-8 mb-4 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FDEF9E]">Related Policies</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/cookies_policy" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                        <h4 className="font-semibold text-lg mb-2 text-white">Cookies Policy</h4>
                        <p className="text-sm text-gray-300">Learn about how we use cookies on our website</p>
                    </Link>
                    <Link href="/" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600">
                        <h4 className="font-semibold text-lg mb-2 text-white">Home</h4>
                        <p className="text-sm text-gray-300">Return to our homepage</p>
                    </Link>
                </div>
            </section>

        </div>
    )
}


export default Privacypolicies