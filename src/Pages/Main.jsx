import Typed from "typed.js";
import { useRef,useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

function Main() {
    
    const el = useRef(null);

    const pathAnimation = anime({
        targets: '#demo path',
        strokeDashoffset: [0, anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: function(el, i) { return i * 500 },
        direction: 'reverse',
        autoplay: false 
    });

    function startAnimationSecondTime() {
        pathAnimation.restart(); 
    }
    
    useEffect(() => {
        startAnimationSecondTime();
        const typed = new Typed(el.current, {
        strings: [`Web`, "MERN Stack", "Java", "JS", "SpringBoot"],
        startDelay: 500,
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 150,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "|"
        });

        return () => {
        typed.destroy();
        };
    }, []);

    return ( 
        <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="name mt-32 md:mt-0 font-extrabold text-white md:text-[30px] text-xl flex justify-center items-start flex-col ml-10 md:ml-20">
                <div className="mb-5 flex flex-col gap-3">
                    <span className="text-white text-[18px] font-urban font-medium">Hi, My name</span>
                    {/* <svg className="w-full h-12" id="hw" viewBox="0 0 221 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.472 44.384C12.6747 44.384 9.432 43.5733 6.744 41.952C4.09867 40.288 2.24267 38.1333 1.176 35.488C0.92 35.0613 0.792 34.6347 0.792 34.208C0.792 33.6107 1.00533 33.12 1.432 32.736C1.85867 32.3093 2.37067 32.096 2.968 32.096C4.03467 32.096 4.73867 32.6507 5.08 33.76C5.80533 35.7653 7.21333 37.408 9.304 38.688C11.4373 39.9253 13.8267 40.544 16.472 40.544C18.5627 40.544 20.4187 40.1813 22.04 39.456C23.704 38.7307 24.984 37.7493 25.88 36.512C26.8187 35.2747 27.288 33.888 27.288 32.352C27.288 30.3893 26.4773 28.6827 24.856 27.232C23.2347 25.7813 20.4827 24.5227 16.6 23.456C7.68267 21.024 3.224 17.056 3.224 11.552C3.224 9.46133 3.8 7.60533 4.952 5.984C6.14667 4.36266 7.85333 3.08266 10.072 2.144C12.3333 1.20533 14.9573 0.735996 17.944 0.735996C22.168 0.735996 25.4533 1.54666 27.8 3.168C30.1467 4.74667 31.32 6.88 31.32 9.568C31.32 10.1227 31.128 10.6133 30.744 11.04C30.36 11.424 29.8907 11.616 29.336 11.616C28.824 11.616 28.376 11.4453 27.992 11.104C27.6507 10.7627 27.4587 10.3573 27.416 9.888C27.2027 8.26666 26.2213 6.944 24.472 5.92C22.7653 4.896 20.5253 4.384 17.752 4.384C14.424 4.384 11.8427 5.00267 10.008 6.24C8.216 7.47733 7.32 9.184 7.32 11.36C7.32 13.1947 8.152 14.752 9.816 16.032C11.5227 17.312 14.1253 18.4427 17.624 19.424C22.232 20.704 25.6667 22.3893 27.928 24.48C30.232 26.528 31.384 29.0453 31.384 32.032C31.384 34.336 30.7013 36.448 29.336 38.368C27.9707 40.2453 26.136 41.7173 23.832 42.784C21.528 43.8507 19.0747 44.384 16.472 44.384ZM62.2805 44.896C61.6405 44.896 61.1498 44.6827 60.8085 44.256C60.4672 43.872 60.2965 43.3813 60.2965 42.784V40.992C59.1445 42.016 57.7578 42.848 56.1365 43.488C54.5152 44.0853 52.8938 44.384 51.2725 44.384C48.9685 44.384 46.8992 43.808 45.0645 42.656C43.2298 41.504 41.7792 39.8827 40.7125 37.792C39.6885 35.6587 39.1765 33.248 39.1765 30.56C39.1765 27.6587 39.7738 24.8213 40.9685 22.048C42.2058 19.232 43.9765 16.928 46.2805 15.136C48.6272 13.344 51.3792 12.448 54.5365 12.448C56.4992 12.448 58.2272 12.704 59.7205 13.216C61.2138 13.728 62.7285 14.3467 64.2645 15.072V42.784C64.2645 43.3813 64.0725 43.872 63.6885 44.256C63.3045 44.6827 62.8352 44.896 62.2805 44.896ZM51.2725 40.608C52.9365 40.608 54.6005 40.224 56.2645 39.456C57.9285 38.6453 59.2085 37.792 60.1045 36.896L60.3605 17.504C59.6778 17.2053 58.7818 16.928 57.6725 16.672C56.6058 16.3733 55.6032 16.224 54.6645 16.224C52.5738 16.224 50.6538 16.8427 48.9045 18.08C47.1552 19.3173 45.7685 21.024 44.7445 23.2C43.7632 25.3333 43.2725 27.744 43.2725 30.432C43.2725 33.5467 44.0192 36.0213 45.5125 37.856C47.0058 39.6907 48.9258 40.608 51.2725 40.608ZM78.1925 44.384C77.6378 44.384 77.1472 44.192 76.7205 43.808C76.3365 43.424 76.1445 42.9973 76.1445 42.528V14.304C76.1445 13.7493 76.3365 13.3013 76.7205 12.96C77.1472 12.576 77.6378 12.384 78.1925 12.384C78.7472 12.384 79.2165 12.576 79.6005 12.96C79.9845 13.3013 80.1765 13.7493 80.1765 14.304V24.416C81.4138 20.576 83.1205 17.632 85.2965 15.584C87.5152 13.4933 90.0112 12.448 92.7845 12.448C95.1312 12.448 96.9872 13.0453 98.3525 14.24C99.7178 15.4347 100.699 17.3333 101.296 19.936C101.894 22.496 102.192 25.952 102.192 30.304C102.192 34.5707 102.171 37.3653 102.128 38.688V42.336C102.128 42.8907 101.936 43.3813 101.552 43.808C101.211 44.192 100.763 44.384 100.208 44.384C99.6965 44.384 99.2485 44.192 98.8645 43.808C98.4805 43.3813 98.2885 42.912 98.2885 42.4V38.816C98.2458 37.4933 98.2245 34.7413 98.2245 30.56C98.2245 26.592 98.0112 23.584 97.5845 21.536C97.2005 19.488 96.5818 18.1013 95.7285 17.376C94.9178 16.608 93.7445 16.224 92.2085 16.224C90.7578 16.224 89.3285 16.7573 87.9205 17.824C86.5125 18.8907 85.2752 20.4053 84.2085 22.368C82.8005 24.928 81.7765 27.3387 81.1365 29.6C80.5392 31.8613 80.2192 34.1867 80.1765 36.576L80.1125 42.272C80.1125 42.8693 79.9205 43.3813 79.5365 43.808C79.1952 44.192 78.7472 44.384 78.1925 44.384ZM117.088 44.448C116.533 44.448 116.042 44.256 115.616 43.872C115.232 43.488 115.04 43.04 115.04 42.528V16.416H107.936C107.381 16.416 106.912 16.224 106.528 15.84C106.144 15.4133 105.952 14.9227 105.952 14.368C105.952 13.7707 106.165 13.3013 106.592 12.96C107.018 12.576 107.509 12.384 108.064 12.384H115.04V3.616C115.04 3.06133 115.232 2.592 115.616 2.208C116.042 1.78133 116.533 1.568 117.088 1.568C117.685 1.568 118.154 1.78133 118.496 2.208C118.88 2.592 119.072 3.06133 119.072 3.616V12.384H126.24C126.837 12.384 127.328 12.576 127.712 12.96C128.096 13.344 128.288 13.8133 128.288 14.368C128.288 14.9227 128.074 15.4133 127.648 15.84C127.264 16.224 126.794 16.416 126.24 16.416H119.072V42.528C119.072 43.04 118.858 43.488 118.432 43.872C118.048 44.256 117.6 44.448 117.088 44.448ZM142.741 44.384C140.309 44.384 138.09 43.744 136.085 42.464C134.122 41.1413 132.565 39.3707 131.413 37.152C130.304 34.8907 129.749 32.3947 129.749 29.664C129.749 26.7627 130.389 23.9893 131.669 21.344C132.992 18.6987 134.805 16.5653 137.109 14.944C139.413 13.28 141.952 12.448 144.725 12.448C147.114 12.448 149.29 13.1093 151.253 14.432C153.258 15.712 154.816 17.4827 155.925 19.744C157.077 21.9627 157.653 24.416 157.653 27.104C157.653 30.176 156.97 33.0347 155.605 35.68C154.24 38.3253 152.405 40.4373 150.101 42.016C147.84 43.5947 145.386 44.384 142.741 44.384ZM142.997 40.736C144.832 40.736 146.56 40.1173 148.181 38.88C149.802 37.6427 151.104 36 152.085 33.952C153.066 31.904 153.557 29.728 153.557 27.424C153.557 25.4187 153.152 23.5627 152.341 21.856C151.53 20.1067 150.421 18.72 149.013 17.696C147.648 16.6293 146.112 16.096 144.405 16.096C142.528 16.096 140.778 16.736 139.157 18.016C137.578 19.2533 136.298 20.9173 135.317 23.008C134.378 25.056 133.909 27.232 133.909 29.536C133.909 31.7547 134.314 33.7173 135.125 35.424C135.978 37.088 137.109 38.3893 138.517 39.328C139.925 40.2667 141.418 40.736 142.997 40.736ZM175.347 44.512C172.915 44.512 170.803 44.0213 169.011 43.04C167.261 42.016 165.917 40.8427 164.979 39.52C164.083 38.1547 163.635 37.0027 163.635 36.064C163.635 35.5093 163.805 35.0613 164.147 34.72C164.531 34.336 165 34.144 165.555 34.144C166.493 34.144 167.091 34.592 167.347 35.488C167.944 37.1947 168.947 38.5173 170.355 39.456C171.763 40.3947 173.491 40.864 175.539 40.864C177.587 40.864 179.272 40.3093 180.595 39.2C181.917 38.0907 182.579 36.768 182.579 35.232C182.579 34.336 182.365 33.5893 181.939 32.992C181.555 32.352 180.829 31.7547 179.763 31.2C178.739 30.6453 177.224 30.0693 175.219 29.472C171.763 28.4053 169.267 27.168 167.731 25.76C166.195 24.352 165.427 22.496 165.427 20.192C165.427 17.888 166.365 16.032 168.243 14.624C170.163 13.1733 172.893 12.448 176.435 12.448C179.635 12.448 182.088 13.1093 183.795 14.432C185.544 15.712 186.419 17.4827 186.419 19.744C186.419 20.768 186.248 21.5573 185.907 22.112C185.565 22.624 185.075 22.88 184.435 22.88C183.88 22.88 183.411 22.7093 183.027 22.368C182.643 21.984 182.451 21.5573 182.451 21.088C182.451 20.8747 182.472 20.64 182.515 20.384C182.6 20.128 182.643 19.8933 182.643 19.68C182.643 18.528 182.131 17.632 181.107 16.992C180.083 16.3093 178.525 15.968 176.435 15.968C174.131 15.968 172.339 16.352 171.059 17.12C169.821 17.8453 169.203 18.8907 169.203 20.256C169.203 21.5787 169.736 22.624 170.803 23.392C171.912 24.16 173.811 24.992 176.499 25.888C179.059 26.7413 181.021 27.552 182.387 28.32C183.795 29.088 184.797 30.0053 185.395 31.072C186.035 32.096 186.355 33.4187 186.355 35.04C186.355 36.6187 185.885 38.1333 184.947 39.584C184.051 41.0347 182.771 42.2293 181.107 43.168C179.443 44.064 177.523 44.512 175.347 44.512ZM197.748 44.448C197.193 44.448 196.702 44.256 196.276 43.872C195.892 43.4453 195.7 42.976 195.7 42.464V2.464C195.7 1.90933 195.892 1.44 196.276 1.056C196.702 0.629331 197.193 0.415997 197.748 0.415997C198.345 0.415997 198.814 0.629331 199.156 1.056C199.54 1.44 199.732 1.90933 199.732 2.464V22.112C201.012 19.4667 202.782 17.1627 205.044 15.2C207.348 13.2373 209.694 12.256 212.084 12.256C215.241 12.256 217.46 14.0053 218.74 17.504C220.02 21.0027 220.66 26.4853 220.66 33.952C220.66 38.176 220.596 41.0133 220.468 42.464C220.425 43.0187 220.233 43.488 219.892 43.872C219.55 44.2133 219.102 44.384 218.548 44.384C218.036 44.384 217.566 44.192 217.14 43.808C216.756 43.424 216.564 42.976 216.564 42.464C216.564 41.824 216.585 41.2267 216.628 40.672L216.692 34.4C216.692 27.1893 216.222 22.368 215.284 19.936C214.345 17.4613 213.172 16.224 211.764 16.224C210.185 16.224 208.628 16.8853 207.092 18.208C205.556 19.488 204.212 20.9387 203.06 22.56C201.95 24.1387 201.161 25.44 200.692 26.464C200.052 27.744 199.732 29.5787 199.732 31.968V42.336C199.732 42.976 199.54 43.488 199.156 43.872C198.772 44.256 198.302 44.448 197.748 44.448Z" fill="url(#paint0_linear_1_3)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_3" x1="7" y1="0.99999" x2="257" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#41AFD1"/>
                    <stop offset="1" stop-color="#C12AF7"/>
                    </linearGradient>
                    </defs>
                    </svg>   */}
                    <svg className="h-16 -ml-2" id="demo" viewBox="0 0 527 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M461.794 112.643L461.847 112.702L461.905 112.755C463.237 113.953 464.818 114.58 466.589 114.58C468.364 114.58 469.921 113.949 471.169 112.701C472.46 111.41 473.049 109.721 473.049 107.8V81.88C473.049 76.0029 473.842 71.6875 475.29 68.7908L475.302 68.7681L475.312 68.745C476.43 66.3069 478.343 63.1407 481.094 59.2254C483.898 55.2795 487.169 51.7491 490.909 48.6323L490.918 48.6246L490.928 48.6167C494.574 45.4762 498.134 44.02 501.629 44.02C504.1 44.02 506.696 46.1884 509.026 52.332L509.029 52.3401C510.128 55.1878 510.993 59.5593 511.576 65.5453C512.156 71.5048 512.449 78.9699 512.449 87.9522C512.449 87.9548 512.449 87.9574 512.449 87.96L512.289 103.575C512.182 104.991 512.129 106.506 512.129 108.12C512.129 109.824 512.786 111.318 514.008 112.541L514.036 112.569L514.065 112.595C515.372 113.771 516.893 114.42 518.589 114.42C520.309 114.42 521.832 113.878 523.009 112.701L523.041 112.669L523.07 112.637C524.158 111.413 524.753 109.925 524.884 108.244C525.21 104.538 525.369 97.3828 525.369 86.84C525.369 68.1377 523.772 54.2104 520.477 45.2046C518.812 40.6514 516.488 37.1075 513.437 34.7021C510.368 32.2823 506.671 31.1 502.429 31.1C496.012 31.1 489.813 33.7436 483.856 38.8181L483.856 38.8181L483.846 38.8272C479.564 42.5429 475.964 46.7401 473.049 51.4159V8.12C473.049 6.37269 472.437 4.8359 471.227 3.59789C470.064 2.18327 468.461 1.5 466.589 1.5C464.767 1.5 463.169 2.21861 461.848 3.53934C460.6 4.78731 459.969 6.34504 459.969 8.12V108.12C459.969 109.816 460.618 111.337 461.794 112.643Z" stroke="url(#paint0_linear_1_14)" stroke-width="3"/>
                        <path d="M398.788 110.855L398.807 110.865L398.826 110.876C403.565 113.471 409.102 114.74 415.386 114.74C421.037 114.74 426.088 113.575 430.497 111.201L430.51 111.194L430.523 111.186C434.872 108.733 438.266 105.583 440.654 101.722C443.137 97.8801 444.406 93.8181 444.406 89.56C444.406 85.3342 443.576 81.7377 441.797 78.8757C440.129 75.9132 437.388 73.4538 433.713 71.4478C430.179 69.4609 425.171 67.4005 418.741 65.257C412.051 63.0272 407.481 61.0039 404.892 59.2147C402.627 57.5797 401.526 55.4233 401.526 52.6C401.526 49.7511 402.762 47.6148 405.425 46.054L405.431 46.0502L405.438 46.0462C408.311 44.3225 412.482 43.38 418.106 43.38C423.221 43.38 426.759 44.2246 428.954 45.6881L428.973 45.7003L428.991 45.712C431.138 47.0539 432.126 48.8267 432.126 51.16C432.126 51.4959 432.058 51.92 431.883 52.4457L431.846 52.5573L431.827 52.6734C431.709 53.3781 431.646 54.0486 431.646 54.68C431.646 56.3141 432.332 57.7472 433.526 58.9407L433.557 58.9718L433.59 59.0011C434.847 60.1188 436.384 60.66 438.106 60.66C440.184 60.66 441.89 59.789 443.034 58.0721L443.049 58.0494L443.064 58.0261C444.123 56.3042 444.566 54.0124 444.566 51.32C444.566 45.2197 442.176 40.3374 437.409 36.8417C432.78 33.2624 426.276 31.58 418.106 31.58C409.075 31.58 401.882 33.4258 396.724 37.3216C391.663 41.1185 389.086 46.1985 389.086 52.44C389.086 58.571 391.148 63.6298 395.333 67.4657C399.415 71.2083 405.906 74.3825 414.624 77.0733L414.631 77.0755L414.638 77.0776C419.617 78.5607 423.288 79.9659 425.712 81.2789L425.723 81.285L425.734 81.2908C428.291 82.6203 429.825 83.9533 430.58 85.2117L430.611 85.2631L430.646 85.3119C431.494 86.4991 431.966 88.0425 431.966 90.04C431.966 93.3782 430.557 96.2827 427.542 98.8107C424.554 101.317 420.703 102.62 415.866 102.62C410.979 102.62 406.964 101.503 403.738 99.3519C400.519 97.2058 398.211 94.1856 396.816 90.2231C396.426 88.8872 395.742 87.752 394.686 86.96C393.62 86.16 392.32 85.82 390.906 85.82C389.131 85.82 387.574 86.4514 386.326 87.6993C385.149 88.8764 384.606 90.3998 384.606 92.12C384.606 94.9044 385.916 98.0844 388.212 101.583L388.227 101.606L388.243 101.628C390.74 105.146 394.276 108.213 398.788 110.855Z" stroke="url(#paint1_linear_1_14)" stroke-width="3"/>
                        <path d="M321.194 109.364L321.21 109.374L321.225 109.384C326.485 112.742 332.313 114.42 338.673 114.42C345.604 114.42 352.033 112.346 357.926 108.234C363.901 104.138 368.647 98.6647 372.165 91.848C375.692 85.015 377.453 77.6315 377.453 69.72C377.453 62.7841 375.966 56.4161 372.972 50.6441C370.088 44.7721 366.022 40.1388 360.775 36.7857C355.622 33.3173 349.895 31.58 343.633 31.58C336.379 31.58 329.729 33.7625 323.722 38.0986C317.752 42.3013 313.061 47.8281 309.651 54.6492L309.647 54.6579L309.642 54.6667C306.345 61.481 304.693 68.6374 304.693 76.12C304.693 83.1561 306.123 89.6248 309.006 95.5006L309.013 95.516L309.021 95.5312C312.01 101.287 316.068 105.909 321.194 109.364ZM361.312 57.2307L361.315 57.2372L361.318 57.2436C363.243 61.2969 364.213 65.7153 364.213 70.52C364.213 76.059 363.035 81.2772 360.68 86.1918C358.317 91.1226 355.207 95.0338 351.363 97.9676C347.54 100.885 343.534 102.3 339.313 102.3C335.684 102.3 332.237 101.227 328.945 99.0319C325.665 96.8454 323.005 93.8028 320.978 89.8559C319.068 85.8271 318.093 81.1534 318.093 75.8C318.093 70.2531 319.22 65.0288 321.473 60.1113C323.842 55.0677 326.903 51.1075 330.638 48.1806L330.642 48.1773C334.459 45.1641 338.511 43.7 342.833 43.7C346.759 43.7 350.275 44.918 353.429 47.382L353.449 47.3979L353.47 47.4131C356.762 49.8072 359.38 53.0636 361.312 57.2307Z" stroke="url(#paint2_linear_1_14)" stroke-width="3"/>
                        <path d="M274.598 112.701L274.626 112.729L274.655 112.755C275.987 113.953 277.568 114.58 279.339 114.58C281.03 114.58 282.514 113.933 283.731 112.729C285.053 111.527 285.799 110.027 285.799 108.28V44.5H302.219C303.994 44.5 305.551 43.8686 306.799 42.6207C308.12 41.2999 308.839 39.7014 308.839 37.88C308.839 36.105 308.207 34.5473 306.959 33.2993C305.689 32.0286 304.066 31.42 302.219 31.42H285.799V11C285.799 9.25269 285.187 7.71589 283.977 6.47788C282.814 5.06326 281.211 4.38 279.339 4.38C277.517 4.38 275.919 5.0986 274.598 6.41933L275.639 7.45998L274.598 6.41934C273.35 7.66731 272.719 9.22504 272.719 11V31.42H256.779C255.022 31.42 253.452 32.0367 252.127 33.2165C250.692 34.3814 249.999 35.9946 249.999 37.88C249.999 39.6512 250.625 41.2319 251.824 42.5635L251.85 42.5928L251.878 42.6207C253.126 43.8686 254.684 44.5 256.459 44.5H272.719V108.28C272.719 109.984 273.376 111.478 274.598 112.701Z" stroke="url(#paint3_linear_1_14)" stroke-width="3"/>
                        <path d="M182.161 112.541L182.188 112.569L182.218 112.595C183.549 113.793 185.13 114.42 186.901 114.42C188.676 114.42 190.217 113.786 191.379 112.48C192.594 111.129 193.199 109.491 193.201 107.649C193.201 107.646 193.201 107.643 193.201 107.64L193.361 93.4268C193.361 93.4251 193.361 93.4234 193.361 93.4218C193.466 87.5724 194.249 81.8847 195.708 76.3559C197.271 70.8381 199.78 64.9215 203.256 58.6029L203.256 58.6029L203.259 58.5963C205.85 53.829 208.816 50.2243 212.127 47.7156C215.445 45.2024 218.708 44.02 221.941 44.02C225.543 44.02 228.052 44.9186 229.71 46.4889L229.739 46.5167L229.77 46.5429C231.496 48.0098 232.963 51.0402 233.907 56.0764L233.91 56.0912L233.913 56.1059C234.947 61.0723 235.481 68.4688 235.481 78.36C235.481 88.7831 235.534 95.6798 235.641 99.0241V107.96C235.641 109.656 236.291 111.177 237.466 112.483L237.493 112.513L237.521 112.541C238.743 113.763 240.237 114.42 241.941 114.42C243.716 114.42 245.257 113.786 246.419 112.48C247.616 111.15 248.241 109.57 248.241 107.8V98.7042C248.348 95.3592 248.401 88.3556 248.401 77.72C248.401 66.791 247.653 58.0222 246.123 51.4619C244.59 44.7872 242.028 39.7026 238.289 36.4311C234.53 33.142 229.502 31.58 223.381 31.58C216.026 31.58 209.428 34.3675 203.633 39.8277C199.543 43.6777 196.127 48.7031 193.361 54.8618V37.72C193.361 35.9583 192.736 34.4276 191.451 33.2685C190.208 32.041 188.662 31.42 186.901 31.42C185.132 31.42 183.552 32.0456 182.221 33.242C180.916 34.4042 180.281 35.9449 180.281 37.72V108.28C180.281 109.914 180.967 111.347 182.161 112.541Z" stroke="url(#paint4_linear_1_14)" stroke-width="3"/>
                        <path d="M137.08 112.088L137.096 112.082L137.112 112.075C140.211 110.852 142.997 109.35 145.461 107.565V108.92C145.461 110.704 145.976 112.294 147.095 113.568C148.282 115.032 149.966 115.7 151.921 115.7C153.737 115.7 155.301 114.984 156.53 113.633C157.782 112.366 158.381 110.754 158.381 108.92V39.64V38.6895L157.522 38.2836C153.635 36.4484 149.797 34.8804 146.008 33.5811L145.524 34.9927L146.008 33.5811C142.085 32.2362 137.595 31.58 132.561 31.58C124.363 31.58 117.158 33.9139 111.011 38.6079L111.011 38.6078L111 38.616C105.033 43.2572 100.456 49.2212 97.268 56.4766L97.2679 56.4766L97.2636 56.4866C94.1996 63.5995 92.6613 70.8943 92.6613 78.36C92.6613 85.2741 93.9793 91.5273 96.649 97.0891L96.6568 97.1055L96.6651 97.1217C99.4442 102.569 103.249 106.834 108.084 109.87C112.925 112.91 118.378 114.42 124.401 114.42C128.643 114.42 132.871 113.638 137.08 112.088ZM139.997 45.0845L140.03 45.0938L140.064 45.1016C142.298 45.6172 144.141 46.1595 145.608 46.7214L144.99 93.5569C142.93 95.4922 140.032 97.3954 136.238 99.2447C132.26 101.079 128.318 101.98 124.401 101.98C118.99 101.98 114.616 99.8931 111.165 95.6531C107.71 91.4084 105.901 85.5918 105.901 78.04C105.901 71.5077 107.092 65.7015 109.441 60.5928C111.904 55.3608 115.212 51.3096 119.347 48.3846C123.474 45.4657 127.973 44.02 132.881 44.02C135.069 44.02 137.439 44.3682 139.997 45.0845Z" stroke="url(#paint5_linear_1_14)" stroke-width="3"/>
                        <path d="M17.0813 108.11L17.0932 108.117L17.1053 108.124C24.1038 112.346 32.491 114.42 42.2 114.42C48.9187 114.42 55.2676 113.042 61.2302 110.281C67.1998 107.517 71.9956 103.681 75.5731 98.7623L75.5778 98.7558L75.5824 98.7493C79.172 93.7015 80.98 88.119 80.98 82.04C80.98 74.1342 77.9088 67.4412 71.8476 62.0487C65.9486 56.5996 57.1101 52.3051 45.4829 49.0751C36.8135 46.6433 30.5165 43.8801 26.4672 40.8454C22.6209 37.8841 20.82 34.4071 20.82 30.36C20.82 25.4161 22.8153 21.6121 26.8855 18.799C31.1283 15.9404 37.2419 14.42 45.4 14.42C52.1636 14.42 57.469 15.6707 61.4283 18.0462L61.4352 18.0504L61.4422 18.0545C65.5111 20.4363 67.6034 23.3756 68.0692 26.8486C68.2146 28.3668 68.8523 29.6936 69.9393 30.7807L69.9705 30.8118L70.0035 30.8411C71.237 31.9376 72.7112 32.5 74.36 32.5C76.135 32.5 77.6927 31.8686 78.9407 30.6207L78.9686 30.5928L78.9949 30.5634C80.1933 29.2319 80.82 27.6512 80.82 25.88C80.82 18.6334 77.615 12.8482 71.3649 8.64055C65.1543 4.3528 56.6015 2.3 45.88 2.3C38.2582 2.3 31.4959 3.49762 25.6249 5.93461L25.6249 5.93458L25.6155 5.93855C19.8697 8.36949 15.3677 11.7209 12.1924 16.0302L12.1847 16.0406L12.1772 16.0512C9.10733 20.3718 7.58 25.3189 7.58 30.84C7.58 38.1872 10.58 44.5029 16.4428 49.7205C22.2579 54.8957 30.8654 58.9761 42.124 62.0468C51.7656 64.6957 58.3707 67.7676 62.1598 71.1579C65.9336 74.5344 67.74 78.4092 67.74 82.84C67.74 86.3487 66.6762 89.4978 64.525 92.3334L64.5149 92.3467L64.5051 92.3602C62.4496 95.1987 59.4814 97.4985 55.5206 99.225L55.514 99.2278L55.5075 99.2308C51.6779 100.944 47.2525 101.82 42.2 101.82C35.8375 101.82 30.1322 100.337 25.0479 97.3914C20.0862 94.3498 16.8247 90.5093 15.1423 85.8822C14.6514 84.3058 13.8604 82.9852 12.6883 82.0618C11.4959 81.1223 10.0437 80.7 8.44 80.7C6.55736 80.7 4.90694 81.3851 3.56713 82.7117C2.18971 83.9655 1.5 85.5944 1.5 87.48C1.5 88.8228 1.89468 90.1176 2.61183 91.3471C5.41459 98.2325 10.2627 103.821 17.0813 108.11Z" stroke="url(#paint6_linear_1_14)" stroke-width="3"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_14" x1="492.669" y1="3" x2="492.669" y2="113.08" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_14" x1="414.586" y1="33.08" x2="414.586" y2="113.24" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1_14" x1="341.073" y1="33.08" x2="341.073" y2="112.92" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_1_14" x1="279.419" y1="5.88" x2="279.419" y2="113.08" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_1_14" x1="214.341" y1="32.92" x2="214.341" y2="112.92" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_1_14" x1="125.521" y1="33.08" x2="125.521" y2="114.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_1_14" x1="41.24" y1="3.8" x2="41.24" y2="112.92" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#41AFD1"/>
                        <stop offset="1" stop-color="#C12AF7"/>
                        </linearGradient>
                        </defs>
                    </svg> 
                </div>
                <div >
                    <span className="mr-3">I'm an Aspiring</span>
                    <span ref={el} ></span>
                    <span className="mr-3">{" "}Developer</span>
                </div>
                <div className="flex justify-center items-center gap-3 mt-5 text-white">
                    <a href="mailto:smartsantosh1928@gmail.com" target="_blank" className="hover:text-[#DB4437]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/smartsantosh1928" target="_blank" className="hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/smartsantosh1928" target="_blank" className="hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://instagram.com/tosh_san03" target="_blank" className="hover:text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://twitter.com/ITZ_ME_SANTOSH/" target="_blank" className="hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                </div>
            </div>        
            <div className="-ml-96 md:-ml-60 md:w-full relative">
                <svg id="visual" viewBox="0 0 900 450" width="1200" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <mask id="mask1" mask-type="alpha">
                        <path d="M85.5 -103.8C110.6 -80.9 130.7 -53.7 141.4 -20.8C152.1 12.1 153.6 50.8 136.5 77.3C119.4 103.7 83.7 117.9 49.6 125.9C15.4 133.8 -17.3 135.5 -57.7 132.2C-98.2 129 -146.5 120.7 -172.7 91.8C-198.8 62.8 -202.8 13.2 -188.3 -27C-173.9 -67.2 -140.9 -98 -106.5 -119.2C-72 -140.5 -36 -152.2 -2.9 -148.8C30.2 -145.3 60.4 -126.7 85.5 -103.8" 
                        fill="#8B31FF">
                        </path>
                    </mask>
                    <g mask="url(#mask1)" transform="translate(473.6021223505495 232.7947604904653)">
                        <path d="M85.5 -103.8C110.6 -80.9 130.7 -53.7 141.4 -20.8C152.1 12.1 153.6 50.8 136.5 77.3C119.4 103.7 83.7 117.9 49.6 125.9C15.4 133.8 -17.3 135.5 -57.7 132.2C-98.2 129 -146.5 120.7 -172.7 91.8C-198.8 62.8 -202.8 13.2 -188.3 -27C-173.9 -67.2 -140.9 -98 -106.5 -119.2C-72 -140.5 -36 -152.2 -2.9 -148.8C30.2 -145.3 60.4 -126.7 85.5 -103.8" 
                        fill="#8B31FF">
                        </path>
                        <image href="/personal.png" x="-180" y="-150" className="w-80 h-80" />
                    </g>
                </svg>
            </div>
    
        </div>
        </>
     );
}

export default Main;