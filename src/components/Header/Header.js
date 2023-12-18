import React from 'react';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { homeURL } from '../../constants/pagesRoute';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="bg-gray-vol1 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div onClick={() => navigate(homeURL)} className={`flex items-center flex-col cursor-pointer`}>
                    <img src={Logo} alt="Logo" className="h-8 w-auto mr-2" />
                    <span className="text-xxm text-gray-500">powered by Ranko</span>
                </div>
                <div className="group relative w-max">
                    <button
                        onClick={() => navigate(homeURL)}
                    >
                    </button>
                </div>
            </div>
        </header>
    )
} 
