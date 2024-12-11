import Image from 'next/image';
import team_about_img from '@/assets/images/team_about_img1.png';

export default function Home() {
  return (

      <div className=''>
        <div className='pt-40'>
          <div>
            {/* <img src="/assets/images/team_about_img1.png"  /> */}
            <Image src={team_about_img}/>
          </div>
          <p
              className={`text-ELSE-EC0`} // COLORS에서 색상 참조
          >신비롭고강력한 힘, 상상의 야구 실현</p>

        </div>
      </div>

  );
}
// text-[#EC0A0B]