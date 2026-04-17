import { type TestimonialCardProps } from '@/view/testimonial/components/testimonial-card'
import React from 'react'

export const testimonialsList: TestimonialCardProps[] = [
	{
		title: 'MAPS Infotech',
		subtitle: 'Advanced trading technology for modern financial markets',
		content:
			"Stephen is a standout engineer whom I've seen evolve into a true technical leader. His proactive mindset and ability to architect scalable solutions have made him a cornerstone of our development team at MAPS. I couldn't be more impressed with his dedication.",
		user: {
			name: 'Man Lu',
			position: 'Head of Engineering',
			company: 'MAPS',
			avatar: '/assets/images/connections/man-lu.png',
			companyLogo: (
				<svg width="90" height="25" viewBox="0 0 90 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_39_16)">
						<path
							d="M44.4815 14.7817V24.3734H42.1083V16.9518L38.5806 23.3552C38.2305 23.9939 37.6425 24.3734 36.9984 24.3734H36.7152C36.0791 24.3734 35.4778 23.9913 35.1437 23.3712L31.6053 16.9492V24.3734H29.2321V14.7817C29.2481 13.6192 30.0552 12.7132 31.0708 12.7132C31.7122 12.7132 32.2841 13.0847 32.6369 13.7341L36.8541 21.3936L41.0874 13.7154C41.4188 13.0981 42.0201 12.7132 42.6535 12.7132C43.6584 12.7132 44.4762 13.6406 44.4762 14.7817H44.4815Z"
							className="dark:fill-[#231F20] fill-white"
						/>
						<path
							d="M54.7654 13.9132C54.3752 13.1756 53.659 12.7132 52.8973 12.7132H52.0501C51.2884 12.7132 50.5776 13.1729 50.182 13.9132L44.6419 24.3734H47.3919L49.1878 21.0087H55.7542L57.5475 24.3734H60.2975L54.7601 13.9132H54.7654ZM50.615 18.3228L52.1624 15.4044H52.7851L54.3325 18.3228H50.6123H50.615Z"
							className="dark:fill-[#231F20] fill-white"
						/>
						<path
							d="M71.5569 12.7132H60.4713V24.3734H62.8445V21.0087H71.5569C73.302 21.0087 74.7238 19.4025 74.7238 17.4222V16.2997C74.7238 14.3221 73.302 12.7105 71.5569 12.7105V12.7132ZM71.5569 18.3228H62.8445V15.4044H71.5569C71.9872 15.4044 72.3506 15.8133 72.3506 16.3024V17.4249C72.3506 17.9193 71.9952 18.3228 71.5569 18.3228Z"
							className="dark:fill-[#231F20] fill-white"
						/>
						<path
							d="M78.1206 16.3051C78.1206 16.7995 78.4761 17.2031 78.9117 17.2031H86.833C88.5782 17.2031 90 18.8092 90 20.7896C90 22.7699 88.5782 24.3761 86.833 24.3761H75.7474V21.6742H86.833C87.2633 21.6742 87.6268 21.2706 87.6268 20.7896C87.6268 20.3085 87.2713 19.8916 86.833 19.8916H78.9117C77.1665 19.8916 75.7501 18.2854 75.7501 16.3051C75.7501 14.3247 77.1692 12.7159 78.9117 12.7159H90V15.4071H78.9117C78.4841 15.4071 78.1206 15.816 78.1206 16.3051Z"
							className="dark:fill-[#231F20] fill-white"
						/>
						<path
							d="M2.65115 12.7159H2.01776C0.903381 12.7159 0 13.6193 0 14.7336V22.4198C0 23.5342 0.903381 24.4376 2.01776 24.4376H2.65115C3.76552 24.4376 4.6689 23.5342 4.6689 22.4198V14.7336C4.6689 13.6193 3.76552 12.7159 2.65115 12.7159Z"
							fill="#F15F3E"
						/>
						<path
							d="M7.09022 0H6.45683C5.34245 0 4.43907 0.903381 4.43907 2.01776V9.70394C4.43907 10.8183 5.34245 11.7217 6.45683 11.7217H7.09022C8.20459 11.7217 9.10798 10.8183 9.10798 9.70394V2.01776C9.10798 0.903381 8.20459 0 7.09022 0Z"
							fill="#6CCBD8"
						/>
						<path
							d="M11.5293 12.7159H10.8959C9.78151 12.7159 8.87813 13.6193 8.87813 14.7336V22.4198C8.87813 23.5342 9.78151 24.4376 10.8959 24.4376H11.5293C12.6437 24.4376 13.547 23.5342 13.547 22.4198V14.7336C13.547 13.6193 12.6437 12.7159 11.5293 12.7159Z"
							className="dark:fill-[#231F20] fill-white"
						/>
						<path
							d="M15.9683 5.86085H15.335C14.2206 5.86085 13.3172 6.76423 13.3172 7.87861V9.70394C13.3172 10.8183 14.2206 11.7217 15.335 11.7217H15.9683C17.0827 11.7217 17.9861 10.8183 17.9861 9.70394V7.87861C17.9861 6.76423 17.0827 5.86085 15.9683 5.86085Z"
							fill="#F15F3E"
						/>
						<path
							d="M20.4101 12.7159H19.7767C18.6623 12.7159 17.7589 13.6193 17.7589 14.7336V22.4198C17.7589 23.5342 18.6623 24.4376 19.7767 24.4376H20.4101C21.5245 24.4376 22.4278 23.5342 22.4278 22.4198V14.7336C22.4278 13.6193 21.5245 12.7159 20.4101 12.7159Z"
							className="dark:fill-[#231F20] fill-white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_39_16">
							<rect width="90" height="24.4376" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
		},
		className: 'col-span-1 md:col-span-2 md:row-span-2',
		variant: 'primary',
	},
	{
		title: 'IDECO Vietnam',
		subtitle: 'Building impactful digital solutions',
		content:
			'Working with Stephen has been a game-changer for our agency. His attention to detail and ability to tackle complex technical challenges is unparalleled.',
		user: {
			name: 'Phuc Mai',
			position: 'Full Stack Developer',
			company: 'IDECO',
			avatar: '/assets/images/connections/phuc-mai.png',
		},
		className: 'col-span-1 md:col-span-2',
	},
	{
		title: 'Softworld',
		subtitle: 'Technical Excellence',
		content:
			'Stephen is an exceptional engineer with a keen eye for modern frontend patterns. His contributions to our core architecture were invaluable.',
		user: {
			name: 'Hoang Bao Vu',
			position: 'Frontend Leader',
			company: '',
			avatar: '/assets/images/connections/hoang-bao-vu.png',
			companyLogo: '/assets/images/logo/others/sw.png',
		},
		className: 'col-span-1',
	},
	{
		title: 'XOMAD',
		subtitle: 'Creative Developer - Partner',
		content:
			'Working alongside Stephen has been a fantastic experience. His proactive approach and technical skills make every project much smoother.',
		user: {
			name: 'Trang Alice',
			position: 'Colleague',
			company: 'XOMAD',
			avatar: '/assets/images/connections/trang-alice.png',
			companyLogo: (
				<svg width="200" height="20" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_43_32)">
						<path
							d="M11 14.7L1 0.5H5L13.1 12.6L21 0.5H25.1L15 14.7L26.1 30.9H22L13 17.9L4 30.9H0L11 14.7Z"
							fill="#EC3026"
						/>
						<path
							d="M38.6 15.9C38.6 13.7 39 11.6 39.8 9.49999C40.5 7.59999 41.6 5.89999 43 4.49999C44.4 3.09999 46.1 1.89999 48 1.09999C52.1 -0.500006 56.6 -0.500006 60.7 1.09999C62.6 1.89999 64.2 2.99999 65.7 4.39999C67.1 5.79999 68.2 7.49999 68.9 9.39999C69.7 11.4 70.1 13.6 70.1 15.8C70.1 18 69.7 20.2 69 22.2C68.3 24.1 67.2 25.8 65.8 27.3C64.4 28.7 62.7 29.9 60.8 30.6C56.7 32.2 52.2 32.2 48.1 30.6C46.2 29.9 44.6 28.7 43.2 27.3C41.8 25.8 40.7 24.1 40 22.2C39 20.3 38.6 18.1 38.6 15.9ZM42.4 15.9C42.4 17.6 42.7 19.2 43.2 20.8C43.7 22.3 44.5 23.6 45.6 24.7C46.7 25.8 48 26.7 49.4 27.3C52.6 28.6 56.1 28.6 59.3 27.3C60.7 26.7 62 25.8 63 24.7C64 23.6 64.9 22.2 65.4 20.8C66 19.2 66.2 17.6 66.2 15.9C66.2 14.2 65.9 12.6 65.4 11C64.9 9.49999 64.1 8.19999 63 7.09999C61.9 5.99999 60.7 5.09999 59.3 4.49999C56.1 3.19999 52.6 3.19999 49.4 4.49999C48 5.09999 46.7 5.99999 45.6 7.09999C44.6 8.19999 43.7 9.59999 43.2 11C42.7 12.6 42.4 14.3 42.4 15.9ZM86 0.799994H91L101.6 24.9L112 0.799994H117V31.9H113.8V4.89999H113.7L102.2 31.9H101L89.2 4.89999H89.1V31.9H86V0.799994ZM147.2 0.799994H144.3L131 31.9H135L145.6 4.89999L156 31.9H159.9L147.2 0.799994ZM199.9 14C199.6 11.7 198.9 9.39999 197.7 7.39999C197 6.09999 196 4.99999 194.8 3.99999C193.4 2.89999 191.9 2.09999 190.2 1.49999C188 0.799994 185.7 0.499994 183.5 0.499994H173.9V3.49999H182.7C184.6 3.49999 186.5 3.69999 188.3 4.19999C189.9 4.69999 191.4 5.39999 192.7 6.49999C194 7.49999 195 8.89999 195.6 10.4C196.4 12.1 196.7 14.1 196.7 16C196.7 17.9 196.4 19.8 195.6 21.6C194.9 23.1 193.9 24.4 192.7 25.5C191.4 26.5 189.9 27.3 188.2 27.8C186.4 28.3 184.5 28.5 182.6 28.5H173.8V31.4H183.8C186 31.4 188.1 31.1 190.2 30.4C191.9 29.8 193.4 29 194.8 27.9C196 27 197 25.8 197.7 24.5C198.9 22.5 199.6 20.3 199.9 17.9C200 17 200 16.4 200 16C200 15.5 200 14.9 199.9 14Z"
							fill="#282827"
							className="fill-[#282827] dark:fill-white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_43_32">
							<rect width="200" height="31.9" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
		},
		className: 'col-span-1 md:col-span-2',
	},
	{
		title: 'MAPS Infotech',
		subtitle: 'Advanced trading technology for modern financial markets',
		content:
			'Stephen has a rare ability to turn complex logic into clean, performant code. He’s a top-tier engineer who makes any team better just by being in it.',
		user: {
			name: 'Khanh Phan',
			position: 'Senior Software Engineer',
			company: 'MAPS',
			avatar: '/assets/images/connections/khanh-phan.png',
			companyLogo: (
				<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.65115 12.7159H2.01776C0.903381 12.7159 0 13.6193 0 14.7336V22.4198C0 23.5342 0.903381 24.4376 2.01776 24.4376H2.65115C3.76552 24.4376 4.6689 23.5342 4.6689 22.4198V14.7336C4.6689 13.6193 3.76552 12.7159 2.65115 12.7159Z"
						fill="#F15F3E"
					/>
					<path
						d="M7.09022 0H6.45683C5.34245 0 4.43907 0.903381 4.43907 2.01776V9.70394C4.43907 10.8183 5.34245 11.7217 6.45683 11.7217H7.09022C8.20459 11.7217 9.10798 10.8183 9.10798 9.70394V2.01776C9.10798 0.903381 8.20459 0 7.09022 0Z"
						fill="#6CCBD8"
					/>
					<path
						d="M11.5293 12.7159H10.8959C9.78151 12.7159 8.87813 13.6193 8.87813 14.7336V22.4198C8.87813 23.5342 9.78151 24.4376 10.8959 24.4376H11.5293C12.6437 24.4376 13.547 23.5342 13.547 22.4198V14.7336C13.547 13.6193 12.6437 12.7159 11.5293 12.7159Z"
						className="fill-[#231F20] dark:fill-white"
					/>
					<path
						d="M15.9683 5.86085H15.335C14.2206 5.86085 13.3172 6.76423 13.3172 7.87861V9.70394C13.3172 10.8183 14.2206 11.7217 15.335 11.7217H15.9683C17.0827 11.7217 17.9861 10.8183 17.9861 9.70394V7.87861C17.9861 6.76423 17.0827 5.86085 15.9683 5.86085Z"
						fill="#F15F3E"
					/>
					<path
						d="M20.4101 12.7159H19.7767C18.6623 12.7159 17.7589 13.6193 17.7589 14.7336V22.4198C17.7589 23.5342 18.6623 24.4376 19.7767 24.4376H20.4101C21.5245 24.4376 22.4278 23.5342 22.4278 22.4198V14.7336C22.4278 13.6193 21.5245 12.7159 20.4101 12.7159Z"
						className="fill-[#231F20] dark:fill-white"
					/>
				</svg>
			),
		},
		className: 'col-span-1',
	},
	{
		title: 'Inspiration & Growth',
		subtitle: 'Personal Mentorship',
		content:
			'Seeing Stephen grow from a dedicated student to a highly skilled engineer has been a privilege. His logical thinking and persistence are outstanding traits that will take him very far.',
		user: {
			name: 'Dao Nguyen',
			position: 'Mentor & Instructor',
			company: 'Academic',
			avatar: '/assets/images/connections/dao-nguyen.png',
		},
		className: 'col-span-1 md:col-span-2',
	},
]
