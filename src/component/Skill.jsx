import React from 'react'
import react from '../img/skill/atom.png'
import css from '../img/skill/css-3.png'
import figma from '../img/skill/figma.png'
import html from '../img/skill/html5.png'
import a from '../img/skill/a.png'
import as from '../img/skill/as.png'
import c from '../img/skill/c.png'
import fl from '../img/skill/fl.png'
import js from '../img/skill/js.png'
import git from '../img/skill/git.png'
import ill from '../img/skill/illustrator.png'
import node from '../img/skill/njs.png'
import ph from '../img/skill/photoshop.png'
import sql from '../img/skill/sql.png'
import py from '../img/skill/py.png'
import './skill.css'



function Skill() {
  return (
    <div className='skill'>
        <h1 className='sk'>SKILLS</h1>
        <div className="use">
            <h3>USING NOW:</h3>
            <div class="row row-cols-1 row-cols-md-6 g-4">
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={react} alt="" />
                    <p class="card-text">React</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={css} alt="" />
                    <p class="card-text">CSS</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={figma} alt="" />
                    <p class="card-text">Figma</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={html} alt="" />
                    <p class="card-text">HTML</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={ph} alt="" />
                    <p class="card-text">Photoshop</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={js} alt="" />
                    <p class="card-text">JavaScript</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={ill} alt="" />
                    <p class="card-text">Illustrator</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={sql} alt="" />
                    <p class="card-text">My SQL</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={git} alt="" />
                    <p class="card-text">Git</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={py} alt="" />
                    <p class="card-text">Python</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={c} alt="" />
                    <p class="card-text">C++</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="use">
            <h3>LEARNING:</h3>
            <div class="row row-cols-1 row-cols-md-6 g-4">
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={a} alt="" />
                    <p class="card-text">Angular</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={as} alt="" />
                    <p class="card-text">Android Studio</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={fl} alt="" />
                    <p class="card-text">Flutter</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <img src={node} alt="" />
                    <p class="card-text">Node.js</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>

    </div>
  )
}

export default Skill