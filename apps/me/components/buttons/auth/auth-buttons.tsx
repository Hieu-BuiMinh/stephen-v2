'use client'

import StephenLogo from '@/components/logo/stephen-logo'
import { APP_CONFIG } from '@/configs/app-config'
import { useSocialAuth } from '@/hooks/use-social-auth'
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@repo/stephen-v2-ui/shadcn'
import { cn } from '@repo/stephen-v2-utils'
import { Github, Loader2 } from 'lucide-react'

interface SingInButtonProps {
	className?: string
}

export function SingInButton({ className }: SingInButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={cn('h-9 px-4 text-xs', className)} variant="primary-matter">
					Sign In
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[400px] p-0 overflow-hidden border-none shadow-2xl bg-card">
				{/* Background Decoration */}
				<div className="to-primary/10 pointer-events-none absolute top-0 h-52 w-full bg-gradient-to-t from-transparent" />
				<AuthDialogLines />

				<div className="relative flex flex-col gap-6 px-6 py-12">
					<DialogHeader className="flex items-center justify-center gap-6 text-center">
						<div className="flex items-center justify-center gap-3">
							<StephenLogo variant="positive" className="size-8.5 text-black block dark:hidden" />
							<StephenLogo variant="negative" className="size-8.5 text-black hidden dark:block" />
							<span className="text-xl font-semibold">{APP_CONFIG.name}</span>
						</div>
						<div className="space-y-1.5">
							<DialogTitle className="text-2xl font-semibold text-center">Welcome Back</DialogTitle>
							<DialogDescription className="text-center text-base text-muted-foreground">
								Choose a provider to continue to your account.
							</DialogDescription>
						</div>
					</DialogHeader>

					<SocialAuthButtons />
				</div>
			</DialogContent>
		</Dialog>
	)
}

export function SocialAuthButtons({ className }: { className?: string }) {
	const { signInWith, isLoading } = useSocialAuth()

	return (
		<div className={cn('flex items-center gap-3', className)}>
			<Button
				variant="secondary-matter"
				className="h-10 grow gap-2"
				onClick={() => signInWith('oauth_google')}
				disabled={!!isLoading}
			>
				{isLoading === 'oauth_google' ? (
					<Loader2 className="size-5 animate-spin" />
				) : (
					<GoogleIcon className="size-5" />
				)}
				<span className="text-sm font-medium">Google</span>
			</Button>

			<Button
				variant="secondary-matter"
				className="h-10 grow gap-2"
				onClick={() => signInWith('oauth_github')}
				disabled={!!isLoading}
			>
				{isLoading === 'oauth_github' ? (
					<Loader2 className="size-5 animate-spin" />
				) : (
					<Github className="size-5" />
				)}
				<span className="text-sm font-medium">GitHub</span>
			</Button>
		</div>
	)
}

function AuthDialogLines() {
	return (
		<svg
			width="520"
			height="209"
			viewBox="0 0 520 209"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="pointer-events-none absolute inset-x-0 top-0"
		>
			{[...Array(25)].map((_, i) => (
				<line
					key={i}
					x1={26.25 + i * 19.5}
					y1="0"
					x2={26.25 + i * 19.5}
					y2={94 + Math.sin(i * 0.5) * 30 + 40}
					stroke={`url(#paint${i}_linear)`}
					strokeOpacity="0.1"
					strokeWidth="0.5"
				/>
			))}
			<defs>
				{[...Array(25)].map((_, i) => (
					<linearGradient
						key={i}
						id={`paint${i}_linear`}
						x1={25.5 + i * 19.5}
						y1="0"
						x2={25.5 + i * 19.5}
						y2={172}
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="var(--color-primary, #000)" />
						<stop offset="1" stopColor="var(--color-primary-foreground, #fff)" />
					</linearGradient>
				))}
			</defs>
		</svg>
	)
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
				fill="#4285F4"
			/>
			<path
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
				fill="#34A853"
			/>
			<path
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
				fill="#FBBC05"
			/>
			<path
				d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
				fill="#EA4335"
			/>
		</svg>
	)
}
