import { NewsData } from '../view/appView';

interface BaseOptions {
    apiKey: string;
}

interface MakeUrlOptions {
    sources: string;
}
class Loader {
    public baseLink: string;
    public options: BaseOptions;
    constructor(baseLink: string, options: BaseOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint = '', options = {} as MakeUrlOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: MakeUrlOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: (data: NewsData) => void, options = {} as MakeUrlOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
