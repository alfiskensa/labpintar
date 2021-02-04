import React, { useLayoutEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import MainLayout from "../layouts/main"
import Slider from "react-slick";
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }
  return size;
}

function NextArrow(props) {
  const { className, customClass, onClick } = props;
  return (
    <div
      className={`${className} ${customClass} ${styles.arrowSlideNext} ${styles.arrowSlide}`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, customClass, onClick } = props;
  return (
    <div
      className={`${className} ${customClass} ${styles.arrowSlidePrev} ${styles.arrowSlide}`}
      onClick={onClick}
    />
  );
}

function HeroSlider() {
  const settings = {
    className: "center slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider {...settings}>
      <div>
        <div className={styles.slideItem}>
          <a href='/soon'>
            <img 
              src="/images/topslides/1.png"
              width="100%"
              className="d-none d-xs-none d-sm-none d-lg-block"
            />
            <img 
              src="/images/topslides/1_sm.png"
              width="100%"
              className="d-block d-lg-none"
            />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.slideItem}>
          <a href='/soon'>
          <img 
              src="/images/topslides/2.png"
              width="100%"
              className="d-none d-xs-none d-sm-none d-lg-block"
            />
            <img 
              src="/images/topslides/2_sm.png"
              width="100%"
              className="d-block d-lg-none"
            />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.slideItem}>
          <a href='/soon'>
            <img 
              src="/images/topslides/3.png"
              width="100%"
              className="d-none d-xs-none d-sm-none d-lg-block"
            />
            <img 
              src="/images/topslides/3_sm.png"
              width="100%"
              className="d-block d-lg-none"
            />
          </a>
        </div>
      </div>
    </Slider>
  );
}

function SocmedSlider({ igImages }) {
  const [width, height] = useWindowSize();
  let centerMode = false;
  let variableWidth = false;

  if (width <= 767.98) {
    centerMode = true;
    variableWidth = true;
  }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: centerMode,
    variableWidth: variableWidth,
    nextArrow: <NextArrow customClass={styles.arrowSlideNextSocmed} />,
    prevArrow: <PrevArrow customClass={styles.arrowSlidePrevSocmed} />,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {igImages.map((item, index) => {
        return (
          <div key={`sliderSocmed_${index}`}>
            <div className={styles.slideSocmedItem}>
              <a href={`https://www.instagram.com/p/${item.shortcode}`} target="_blank">
                <img src={item.thumbnail} />
              </a>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}

function HeroProduct() {
  return (
    <div className={styles.heroProduct}>
      <div className="container">
        <div className={styles.heroProductWrap}>
          <h1>Platform edukasi terlengkap berbasis penelitian untuk orang tua</h1>
        </div>
      </div>
    </div>
  );
}

function HeroSubscribe() {
  return (
    <div className={styles.gabungKomunitas}>
      <div className='container' style={{height: '100%'}}>
        <div className={`row justify-content-center`} style={{height: '100%'}}>
          <div className={`col-12 align-self-center text-center`}>
            <div className={styles.gabungDesc}>
              <h1>Komunitas #SobatPintar</h1>
              <p>
                Langganan informasi terbaru dari Lab Pintar yang dikirim setiap minggu secara cuma-cuma!
              </p>
              <Link href="/join-community">
                <a className="btn btn-yellow btn-gabung">Gabung Sekarang</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSocmed() {
  const getIgImages = (edges) => {
    var lists = []

    edges.map((item) => {
      lists.push({
        'thumbnail': item.node.thumbnail_src,
        'shortcode': item.node.shortcode
      })
    })
    return lists
  }

  var images = [];

  const fetcher = url => axios.get(url).then(res => res.data)
  const IG_USER = 'https://www.instagram.com/labpintar/?__a=1';
  const { data, error } = useSWR(IG_USER, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data);
  if (data.graphql.user && data.graphql.user.edge_owner_to_timeline_media && data.graphql.user.edge_owner_to_timeline_media.edges) {
    images = getIgImages(data.graphql.user.edge_owner_to_timeline_media.edges)
  }
  if (images.length < 1) {
    return <></>
  }
  return (
    <div className="container">
       <h1>LabPintar di Media Sosial</h1>
        <div className={styles.sectionSocmed}>
          <div style={{padding: '30px 0'}}>
            <SocmedSlider igImages={images} />
          </div>
        </div>
    </div>
  );
}

function HeroTestimoni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false
  };

  return (
    <div className="container">
      <h1>Testimoni</h1>
      <div className={styles.testimoni}>
        <Slider {...settings}>
          <div>
            <p>
              “Bener-bener akun yang bermanfaat, evidence based, terus berjaya Lab Pintar!”
            </p>
            <p>
              <strong>@mikaelawahyuni</strong>
            </p>            
          </div>
          <div>
            <p>
            "Terima kasih Lab Pintar atas pengetahuan-pengetahuan yang mudah sekali dipahami MasyaAllah”
           </p>
            <p>
              <strong>@nurfadila.zbl</strong>
            </p>            
          </div>
          <div>
            <p>
            “Terus menjadi cahaya penerang melalui sharing ilmu ilmiah ya Lab Pintar. Barakallah”
           </p>
            <p>
              <strong>@nuruul.ilaahil</strong>
            </p>            
          </div>
        </Slider>
      </div>
    </div>
  );
}


export default function Home() {
  
  return (
    <div>
      <HeroSlider />
      <HeroProduct />
      <div className="pb-5">
        <HeroSubscribe />
      </div>
      <div className={styles.section}>
        <HeroSocmed />
      </div>
      <div className={styles.section}>
        <HeroTestimoni /><br/><br/><br/>
      </div>
      <div className="container">
        <div className={styles.footerTestimoni}>&nbsp;</div>
      </div>
    </div>
  )
}

Home.Layout = MainLayout