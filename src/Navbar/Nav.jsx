import React from "react";
import Mybutton from "../Component/MyButton";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<>
			<p className="bg-[#ff9500] text-white m-0 p-2 text-center ">
				Free Course <i className="fa-solid fa-star text-yellow-400"></i> Sale
				Ends Soon, Get It Now
			</p>
			<nav className="relative bg-white">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								command="--toggle"
								commandfor="mobile-menu"
								className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
							>
								<span className="absolute -inset-0.5"></span>
								<span className="sr-only">Open main menu</span>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									data-slot="icon"
									aria-hidden="true"
									className="size-6 block"
								>
									<path
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									data-slot="icon"
									aria-hidden="true"
									className="size-6 hidden"
								>
									<path
										d="M6 18 18 6M6 6l12 12"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex shrink-0 items-center">
								<img
									src="/images/logo.png"
									alt="Your Company"
									className="h-8 w-auto rounded-md"
								/>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									<Link
										to={"/"}
										className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black"
									>
										Home
									</Link>
									<Link
										to={"courses"}
										className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black"
									>
										Courses
									</Link>
									<Link
										to={"about"}
										className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black"
									>
										About Us
									</Link>
									<Link
										to={"pricing"}
										className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black"
									>
										Pricing
									</Link>
									<Link
										to={"contact"}
										className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<Link to="register">
								<button className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-0">
									Sign Up
								</button>
							</Link>

							<div className="relative ml-3">
								<Link to="login">
									<Mybutton text={"login"} />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div id="mobile-menu" hidden className="block sm:hidden">
					<div className="space-y-1 px-2 pt-2 pb-3">
						<a
							href="#"
							aria-current="page"
							className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
						>
							Dashboard
						</a>
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
						>
							Team
						</a>
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
						>
							Projects
						</a>
						<a
							href="#"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
						>
							Calendar
						</a>
					</div>
				</div>
			</nav>
		</>
	);
}
