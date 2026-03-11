import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DownloadIcon from '@mui/icons-material/Download';
import { Maita } from '@/classes/maita';

type MaitaProps = {
    maita: Maita;
    onDownload: (id: string, name: string, description: string,downloadUrl:string) => void;
};

export const MaitaIntroductionRow: React.FC<MaitaProps> = ({ maita, onDownload }) => {
    const [borderColor, setBorderColor] = useState(maita.colors[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [designImageExists, setDesignImageExists] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBorderColor(prevColor => {
                const currentIndex = maita.colors.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % maita.colors.length;
                return maita.colors[nextIndex];
            });
        }, 400);

        return () => clearInterval(intervalId);
    }, [maita.colors]);

    // Check if the design image exists
    useEffect(() => {
        const checkImageExistence = async () => {
            try {
                const response = await fetch(`/maita/${maita.id}/design.png`);
                if (response.ok) {
                    setDesignImageExists(true);
                }
            } catch (error) {
                setDesignImageExists(false); // Set false if there's an error
            }
        };
        checkImageExistence();
    }, [maita.id]);

    return (
        <div className="flex flex-col items-center justify-center py-3 sm:py-4 tracking-wider">
            <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-4 sm:space-x-4 sm:space-y-0">
                {/* 3視点ポーズの画像と立ち絵を横並べ */}
                <div className="flex flex-row items-center space-x-2 sm:space-x-0 md:space-x-4">
                    {/* 3視点ポーズの画像 */}
                    {designImageExists && (
                        <div className="relative w-1/2 md:w-auto md:flex-shrink-0">
                            <div className="absolute inset-0 rounded-xl transform rotate-20"></div>
                            <Image
                                onClick={toggleModal}
                                src={`/maita/${maita.id}/design.png`}
                                alt={`${maita.name}の3視点ポーズ`}
                                width={320}
                                height={210}
                                className={`relative object-cover transform rounded-2xl rotate-20 border-4 shadow-2xl hover:scale-105 cursor-pointer w-full md:w-80 md:max-w-none h-auto ${borderColor}`}
                                style={{ transition: 'all 0.5s ease-in-out' }}
                            />
                        </div>
                    )}
                    
                    {/* 立ち絵画像 */}
                    <Image
                        src={`/maita/${maita.id}/portrait.png`}
                        alt={`${maita.name}の立ち絵`}
                        className="w-1/2 md:w-[224px] md:flex-shrink-0 h-auto object-contain"
                        width={224}
                        height={240}
                        layout="intrinsic"
                    />
                </div>

                <div className="flex flex-col items-start justify-center space-y-3 sm:space-y-4 flex-1 min-w-0">
                    <h3 className="text-xl sm:text-lg md:text-2xl font-bold">{maita.name}</h3>
                    <p className="text-sm sm:text-sm md:text-base leading-relaxed">{maita.description}</p>
                    <div className="flex flex-row items-start justify-center gap-2 sm:gap-2 md:gap-4 w-full">
                        {maita.demoSong && (
                            <button
                                onClick={() => window.open(maita.demoSong, '_blank')}
                                className="text-sm md:text-base font-bold sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-transparent bg-maitaPurple text-white hover:bg-maitaHoverPurple flex items-center justify-center flex-1"
                            >
                                <MusicNoteIcon className="w-5 h-5 sm:w-2 sm:h-2 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                                デモソング
                            </button>
                        )}

                        {maita.downloadUrl && (
                            <button
                                onClick={() => onDownload(maita.id, maita.name, maita.description,maita.downloadUrl)}
                                className={"text-sm md:text-base font-bold sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-transparent transition-colors bg-maitaPurple text-white hover:bg-maitaHoverPurple flex items-center justify-center flex-1"}
                            >
                                <>
                                    <DownloadIcon className="w-5 h-5 sm:w-2 sm:h-2 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                                    ダウンロード
                                </>
                            </button>
                        )}
                    </div>
                    {maita.copyright && (
                        <p className="text-xs sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-2">Designed by {maita.copyright}</p>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                    <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-full overflow-auto">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 left-4 text-black hover:text-gray-700 transition-colors"
                        >
                            閉じる
                        </button>
                        <span className="absolute bottom-2 right-2 text-gray-500 ">
                            Designed by {maita.copyright}
                        </span>
                        <Image
                            src={`/maita/${maita.id}/design.png`}
                            alt={`${maita.name}のデザイン画像`}
                            width={800}
                            height={600}
                            className="object-contain m-8"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};