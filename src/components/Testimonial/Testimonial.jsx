import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-8 text-center'>Testimonials</h1>
            <div className='grid grid-cols-1  lg:grid-cols-2 gap-4' >
                {/* section 1 */}
                <section className="relative isolate border-2 overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""> */}
                        <figure className="mt-10">
                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                <p>“Using this polling and survey website has been a game-changer for me. The user-friendly interface made it a breeze to create surveys tailored to my needs. ”</p>

                            </blockquote>
                            <div className="mt-10">
                                {/* <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}

                                {/* avatar section */}
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>



                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">Judith Black</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <div className="text-gray-600">CEO of Workcation</div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>
                {/* section 2 */}
                <section className="relative isolate border-2 overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""> */}
                        <figure className="mt-10">
                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                <p>I ve tried several polling platforms, and this one stands out. The customization options for surveys are extensive, allowing me to capture exactly the information I need</p>

                            </blockquote>
                            <div className="mt-10">
                                {/* <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}

                                {/* avatar section */}
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>



                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">Judith Black</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <div className="text-gray-600">CEO of Workcation</div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>
                {/* section 3 */}
                <section className="relative isolate border-2 overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""> */}
                        <figure className="mt-10">
                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                <p>Kudos to this polling website for simplifying the survey creation process. The intuitive design makes it easy for both beginners and experienced users.</p>

                            </blockquote>
                            <div className="mt-10">
                                {/* <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}

                                {/* avatar section */}
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>



                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">Judith Black</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <div className="text-gray-600">CEO of Workcation</div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>
                {/* section 4 */}
                <section className="relative isolate border-2 overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""> */}
                        <figure className="mt-10">
                            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                <p>“I've never been this satisfied with a polling website before. The platform's ease of use, combined with its powerful features, has significantly enhanced my surveying experience. The responsive support team adds an extra layer of confidence</p>

                            </blockquote>
                            <div className="mt-10">
                                {/* <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}

                                {/* avatar section */}
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>



                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900">Judith Black</div>
                                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                        <circle cx="1" cy="1" r="1" />
                                    </svg>
                                    <div className="text-gray-600">CEO of Workcation</div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Testimonial;