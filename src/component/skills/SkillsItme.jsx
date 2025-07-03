import { Swiper, SwiperSlide } from "swiper/react";
import skills from '../../json/skills.json';

import "swiper/css";

function SkillsItme() {

    // 배포 & 버전 관리 카테고리 병합 슬라이드
    const mergedDeploymentSlide = {
        category: "배포 & 버전 관리",
        skills: [
            {
                category: "deployment",
                skills: skills.find(item => item.category === "deployment")?.skills || [],
            },
            {
                category: "version control",
                skills: skills.find(item => item.category === "version control")?.skills || [],
            }
            ]
        };
    
    // 라이브러리 & 디자인 카테고리 병합 슬라이드
    const mergedLibraryDesignSlide = {
        category: "라이브러리 & 디자인",
        skills: [
        {
            category: "library",
            skills: skills.find(item => item.category === "library")?.skills || [],
        },
        {
            category: "design",
            skills: skills.find(item => item.category === "design")?.skills || [],
        }
        ]
    };
        
    // 제외할 카테고리 목록
    const mergedCategories = ["deployment", "version control", "library", "design"];
    
    // 나머지 (front-end, back-end 등)
    const otherSlides = skills.filter(item => !mergedCategories.includes(item.category));
    
    // 최종 슬라이드 배열
    const allSlides = [...otherSlides, mergedDeploymentSlide, mergedLibraryDesignSlide];
        
    return (
    <div className='skillsItme_container'>
        {
        <Swiper 
        className="mySwiper"
        spaceBetween={32}
        slidesPerView='auto'
        centeredSlides={false}
        freeMode={false}      
        breakpoints={{
            0: {
                    spaceBetween: 8,
                },
            768: {
            spaceBetween: 8,
            },
            1024: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            },
            1400: {
            slidesPerView: 3.3,
            spaceBetween: 32,
            },
        }}
        >
        {allSlides.map((item, index) => (
        <SwiperSlide key={index}>
            <div className="skillsItme_content">
            {/* 묶인 슬라이드 처리 */}
            {Array.isArray(item.skills[0]) || item.skills[0]?.category ? (
                item.skills.map((group, idx) => (
                <div key={idx} className="categoryBlock">
                    <h3>
                    {{
                        "deployment": "deployment",
                        "version control": "version control",
                        "library": "library",
                        "design": "design"
                    }[group.category] || group.category}
                    </h3>
                    {group.skills.map((skillsData, i) => (
                    <div className="skills_item" key={i}>
                        <div className="iconBox">
                        <p><img src={skillsData.icon} alt={skillsData.name} /></p>
                        </div>
                        <div>
                        <p className="skills_name">{skillsData.name}</p>
                        <span className="skills_description">{skillsData.description}</span>
                        </div>
                    </div>
                    ))}
                </div>
                ))
            ) : (
                <>
                {/* 일반 슬라이드 처리 */}
                <h3>{item.category}</h3>
                {item.skills.map((skillsData, i) => (
                    <div className="skills_item" key={i}>
                    <div className="iconBox">
                        <p><img src={skillsData.icon} alt={skillsData.name} /></p>
                    </div>
                    <div>
                        <p className="skills_name">{skillsData.name}</p>
                        <span className="skills_description">{skillsData.description}</span>
                    </div>
                    </div>
                ))}
                </>
            )}
            </div>
        </SwiperSlide>
        ))}

        </Swiper>
        }
    </div>
    )
}

export default SkillsItme