const bufferCache = new WeakMap<BaseAudioContext, Map<string, Promise<AudioBuffer>>>()

const fetchAndDecode = async (context: BaseAudioContext, src: string) => {
	const response = await fetch(src)
	if (!response.ok) {
		throw new Error(`Could not load ${src}: ${response.status}`)
	}
	const data = await response.arrayBuffer()
	return context.decodeAudioData(data)
}

/** Fetches and decodes a sound once per context. */
export const loadAudioBuffer = (context: BaseAudioContext, src: string): Promise<AudioBuffer> => {
	let cache = bufferCache.get(context)
	if (!cache) {
		cache = new Map()
		bufferCache.set(context, cache)
	}
	const cached = cache.get(src)
	if (cached) {
		return cached
	}
	const loading = fetchAndDecode(context, src)
	cache.set(src, loading)
	const forgetOnFailure = async () => {
		try {
			await loading
		} catch {
			cache?.delete(src)
		}
	}
	forgetOnFailure()
	return loading
}
