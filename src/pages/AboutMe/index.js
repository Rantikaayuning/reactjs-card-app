import React from 'react';
import gambar from '../../assets/images/me2020.jpg';
import bintang from '../../assets/images/bintang.png';
import '../../assets/css/about.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { GitlabFilled, InstagramFilled , GithubFilled, LinkedinFilled } from '@ant-design/icons';

function AboutMe() {
        return (
            <div className='container'>
                <div className='kotak'>
                  <div className='gambar'>
                    <img src={bintang} id='bintang' alt='bintang' /><br/>
                    <img src={gambar} id='foto' alt='foto' /><br/>
                    <img src={bintang} id='bintang' alt='bintang'/><br/>
                  </div>
                  <div className='bio'>
                    <h2>Rantika Ayuning Dewi</h2>
                    <p>Cilacap, Central Java</p>
                    <br/>
                    <p id='p4'>Result-driven Front End Development student from Glints Academy Batch 10 with a background in sales and marketing support passionate about developing user-friendly website design. Seeking to become the next Front End Developer, as well as grow and develop my own skills as a coder. </p>
                    <p id='p1'>Skills :</p>
                    <p id='p2'>HTML5, CSS3, Javascript ES6, ReactJS, Git</p>
                    <p className='button'>              
                    <Button type='dashed' href='https://github.com/Rantikaayuning'><GithubFilled /></Button>
                    <Button type='dashed' href='https://gitlab.com/Rantikaayuning'><GitlabFilled /></Button>
                    <Button type='dashed' href='https://www.instagram.com/rantikaayuning/'><InstagramFilled /></Button>
                    <Button type='dashed' href='https://www.linkedin.com/in/rantika-ayuning-dewi-b96563151/'><LinkedinFilled /></Button>
                    </p>  
                  </div>
                </div>
            </div>
        )
    }

export default AboutMe;