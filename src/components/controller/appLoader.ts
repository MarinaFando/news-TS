import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '097a6704bf0c4318b71ef782ef6e555c',
        });
    }
}

export default AppLoader;
