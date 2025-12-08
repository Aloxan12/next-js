export const apiFetch = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const url = new URL(endpoint, process.env.NEXT_PUBLIC_API_URL || '');

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
};