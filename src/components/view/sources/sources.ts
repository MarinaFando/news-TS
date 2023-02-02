import './sources.css';

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

class Sources {
    public draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        sourceItemTemp &&
            data.forEach((item: Source) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                if (sourceClone) {
                    sourceClone.querySelector('.source__item-name')!.textContent = item.name;
                    sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
