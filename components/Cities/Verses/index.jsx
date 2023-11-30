import { Container, Typography, } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { imgs } from '@/assets/constants'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
const Verses = () => {
  const { ra3y } = imgs;








  return (
    <>
      <section id='Verses' className={styles.Verses} dir='rtl' >
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

            <div className={styles.info_sec}>
              <div className={styles.sec_title}>
                <Typography variant='h3'>عن المكان</Typography>
              </div>
              <div className={styles.boxes_container}>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography >الاسم السابق</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>وجرة</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>الاسم الحالي</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>ركبه</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>أسماء أخرى</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>سهل ركبه</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>المنطقة الإدراية</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>مكة المكرمة</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>قيمة المكان</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>مكان مناسب قديمًا للرعي لوفرة مائه وأشجاره</Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان قديمًا</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>مكان مناسب قديمًا للرعي لوفرة مائه وأشجاره</Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان حديثًا</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>غير موجود وهو ضمن سهل ركبة</Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>الموقع</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>شمال الطائف</Typography>
                  </div>
                </div>

              </div>
            </div>
          </Container>



          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container_mobile'>

            <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
              <div className={styles.sec_title}>
                <Typography variant='h3'>أبيات قيلت في وَجْرَة</Typography>
              </div>
            </Container>
            <div className={styles.slider_sec}>
              <Swiper
                spaceBetween={24}
                slidesPerView={3}
                pagination={{ clickable: true }}
                className={styles.swiper}
              >
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <Link href='/poet' className={styles.info}>
                        <div className={styles.img_container}>
                          <img src={ra3y.src} alt="ra3y" />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.name}>
                            <Typography>امرؤ القيس</Typography>
                          </div>
                          <div className={styles.type}>
                            <Typography>العصر الأموي</Typography>
                          </div>
                        </div>
                      </Link>

                      <div className={styles.desc}>
                        <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                      </div>
                      <Link href='/poetry' className={styles.said}>
                        <div className={styles.title}>
                          <Typography>يقول</Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                            بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                        </div>
                      </Link>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <Link href='/poet' className={styles.info}>
                        <div className={styles.img_container}>
                          <img src={ra3y.src} alt="ra3y" />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.name}>
                            <Typography>امرؤ القيس</Typography>
                          </div>
                          <div className={styles.type}>
                            <Typography>العصر الأموي</Typography>
                          </div>
                        </div>
                      </Link>

                      <div className={styles.desc}>
                        <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                      </div>
                      <Link href='/poetry' className={styles.said}>
                        <div className={styles.title}>
                          <Typography>يقول</Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                            بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                        </div>
                      </Link>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <Link href='/poet' className={styles.info}>
                        <div className={styles.img_container}>
                          <img src={ra3y.src} alt="ra3y" />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.name}>
                            <Typography>امرؤ القيس</Typography>
                          </div>
                          <div className={styles.type}>
                            <Typography>العصر الأموي</Typography>
                          </div>
                        </div>
                      </Link>

                      <div className={styles.desc}>
                        <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                      </div>
                      <Link href='/poetry' className={styles.said}>
                        <div className={styles.title}>
                          <Typography>يقول</Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                            بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                        </div>
                      </Link>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <Link href='/poet' className={styles.info}>
                        <div className={styles.img_container}>
                          <img src={ra3y.src} alt="ra3y" />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.name}>
                            <Typography>امرؤ القيس</Typography>
                          </div>
                          <div className={styles.type}>
                            <Typography>العصر الأموي</Typography>
                          </div>
                        </div>
                      </Link>

                      <div className={styles.desc}>
                        <Typography>ذكرها امرؤُ القيسِ في معلَّقته، عندما وصفَ محبوبته بأنها تنظرُ إليه بعينِ ظبيةٍ من ظباءِ وَجْرةَ معها طفلُها، لأن عينَي الظبية تكونان في غايةِ الجمال إذا نظرَت إلى أولادها نظرةَ العطف والشفقة</Typography>
                      </div>
                      <Link href='/poetry' className={styles.said}>
                        <div className={styles.title}>
                          <Typography>يقول</Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>تَصُــدُّ وتُبْــدي عَن أَسِيــــلٍ وتَتَّقـي <br />
                            بِناظِرَةٍ من وَحشِ وَجْرَةَ مُطْفِلِ</Typography>
                        </div>
                      </Link>

                    </div>
                  </div>
                </SwiperSlide>





              </Swiper>
            </div>


          </Container>

        </div >
      </section >

    </>
  )
}

export default Verses