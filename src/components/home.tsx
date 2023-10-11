import { extensions } from '@/components/dropzone';

export default function Home() {
    return (
        <div className="py-32 pb-8">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-medium text-center capitalize">
                    Free media converter
                </h1>
                <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                    Supported following extensions:
                </p>
                <div className='p-2 rounded-lg flex flex-wrap gap-2'>
                    {extensions.video.map((it, key) => (
                        <div key={key} className='rounded-full px-3 py-1 bg-lime-100'>{it}</div>))
                    }
                    {extensions.audio.map((it, key) => (
                        <div key={key} className='rounded-full px-3 py-1 bg-green-200'>{it}</div>))
                    }
                    {extensions.image.map((it, key) => (
                        <div key={key} className='rounded-full px-3 py-1 bg-teal-200'>{it}</div>))
                    }
                </div>

            </div>
        </div>
    );
}