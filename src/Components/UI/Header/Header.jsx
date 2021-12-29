import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
          title="Home"
            alt="Home"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAJPUlEQVRoge2bbXBU1RnHf+fem33JbjbvAYMJAYIQkii4JHchDI2iUIeOWhEBtTqAtlZH6oytBVodbbHBD2qd6jAWOnVGYVDAqmPVgtaghLiQFHwJAdTW8GpC3jfs5mV3Tz8kG/KySXY3iYDy/3RznnOe5/nnnPO/5z4nEXyHWLx4sXr8+PH5Usr5wNVSyiwhhAmIBk4DVUKIfUKInUajsbi4uLh1pHMQI+0wGAoLC61ut/thIcR9wNgQh9UAzyuK8kJpaWn9SOUy6oQdDscSKeWf6SJqTk0lYdYsrJmTMaeloZpMKAYD7fV1tFbX4Dp0iMaDB3BXVQVc1AAPOJ3O7SORz6gRttvtUaqqPi2EeBDAOimTtNuXETM1K6TxzYcOcXLHDlyHKwNNL6anpz+wbds233DyGhXCixcvVo8dO/YKsFRoGuN/dhcp8+aBCDOclNR88AHHtmzG39YG8LrX611aXl7eEWluaqQDB4PVan1BCLFci45m6pq1xOflhU8WQAgsEydim5ZN/b59yI6OLEVREk6ePPlOpLmNOGFd128SQjwtoqK44pFHiJkyZdg+DYmJ2LKzqd2zB/z+/LS0tK9OnDjxeSS+IlnSQtf164E7gNlAYlf7CWAvcDMwJmP5clKuuz6SnAbEmeIP+d/GjQDVwBVOp7M5XB9aOJ11XZ8GbAJmBTHHA7kAMVOmkHztvHBzGRLJhddQ+/EeXIcrxwCrgbXh+gh5hnVdvwZ4A7BFxcczdv4C4mbMwJCQAIDn9CmaKyrwuloYu3Ahhvj4cHMJCS1ff8Whxx5DSnnm7Nmzl1dUVLSHMz6kGXY4HFlSyjcAW2JBARkrVqKaTL36WDMnY82cHE7siGCdlEn0+PG4q6qSLRbLQuAf4YxXQugj/H7/JrrITvrl/f3IftdIdHTuKEVRrg137JAznJ+fP18IMdsQF8eElfcEfb2019VR9crLNH/2Gb7WkT3+qiYTtpwcLl+yFHNqKgDWyd0rSQ/X35CEhRC3A6QsWIBiNPazt9fV8cWaNXjPtoQbOyT4WltpKCujubKS3KL1GBITiU5PRygK0u+f6XA4qoAvpZS7gTedTudng/kLZQ/rAHHTZwQ1Vr3yMt6zLRjGTsQ64zoUkzVcToPC73HhOrCLjupvOLZ5M5mrVqFaLKRcdz017+8S0u9PB9KBecAfdF0vVhTl8dLS0t3B/A2p0rquNwG2mX9/CcVg6GcvX7kCX2srCT++F8UcM0x6weHzuGh4byOq2Yx909+62/1eLx0NDXiOH6Px00+p27sXn9sNIIENXq/3N+Xl5e6evkIRrUFlP7BnR4ssgNrl2+fx9GpXNA1jcjJxV9vJWL6C6X95nnG3LEJomgDu1zRt5/Tp0+N6jRkoiN1uj87Pz7+bzo9zOhobw05Utrlp/HAzTR+92scgadq9lcbdW7ubmj5+jabiLcg2N5FCNZkYt2gROeuexJiUBFBgNBrfveGGG7rFpx/hwsJCzeFw/F7TtFNCiJeAaENiIlFxcX27DgrZ5qZpz3a8jdVIv7eXzdvwLR31p5CtPYTO56Wj4Vua9mwfFmkAc1oa0554IkDaUV9f/1zA1ouww+HI8Hg8JVLKPyJEbMzULDJWrCR3/VNB9+9AkO0eGvdsx9tci2pNwOa4uZe97eRRAAyp5w4qttk/RbUl4W2upfGj1/C3Dk/1o+LimfzwrxGaBvDzWbNmzYYehO12+2V+v/99IN+UksKU1WvIevRRUubNQ42ODitYU8nr+Jpr0WxJxM29DcVkOWeUkvZTXwJgHHdFd7MwmImbcyuaLQlfSz3Nn7wZOdsuRKenk3rjjdB5eHoKughnZ2cbNE17VwgxyTJpEtl/KiI2J2fYAYOho+E0PnczijkGLT7U8lbkGLvwJ6hmM8AcXdenKQBWq/VB4CpzaipTf7s60CFixBbcMuDybD/ZY3Z7nNqG2gaRQjWZSCwoAEAIcZui67oNeBRg/F13o1osg40PCX2Xp+uTt7ptbV3L2TCu94dG095BtsEwYcvJBUBK6VDa2toUxWDwJ8+diy03d8SCCGM0sXNuJSp+LCLqnOCp5hi0hFSi4i/rM0BBixtD7JxbEcbwNGMoWDLGBx6naQcPHmx88Kv/7gS5ZESj0EW68PZebbFzg4eJ+9GykQ7fjajY7ldqfJdKy5mROgt8Kvo9rmGmNTB8Xb7DfVt0Q8rAk6Lk5+eXVD7x+IRIk7F1qbnrwK5RIe3zuGj5zy4AYnOvjMhHe1NT4LFGE0Jc7Tp6VPG53RH9Bi9fspTmyko6qr+h/r2NESUUCjSrlfQ774xorOfcLcYRhc4KIO11dRE5M6emklu0ngTdMezXWTCoZjMJuoOcovXd9bNw0XjwIABCiI814AAw3nX0KOa0tIgcGhITyVy1KuT+++7oFLL8zVsiihcOfG439fucANLr9W5XhBDvANTtLRn14OcDp99+G5/bjRDi32VlZUcUKeWrQKPr8GGaPh+0OnLRoeXrrzn9z7cB/EKItdBV8XA4HL+TUq4zJqeQ/eSTaBYLrTU1nNi6leaKL/C2jE69aqShms3E5l5J2rJlIODwunW01dYCPOd0Oh+CLsLZ2dkGq9W6F7BbJkxgwj33crioCG/L6L1bRxNaTAxKVBTt9fUAH3q93gWBG8fu03teXl6aoigfARkoCvj92PUC7vvVahKSks9T6uGhrraGDc8WcWB/aaBpl6Zpi0pKSrpnrlcRLy8vL01V1R1SyjyAv255i8SklO8u4xFA7ZlqfnHHTQCtLS0tsX2vYnpVPPbv33/c5XLNCfx8sZEFSEoeE3g0Bbt36leXrqioaNf13gX9tQ/dy5FD565js3KuYt0zL/azna/2vrbBEEqZFkXp3U30+HDvaTtf7X1tgyFoL13XJcCOnZ+E5ORCw6L5DgCcTmc/fiHN8PcJPzjCIV2I9xUIuPCEa1RFCy484bokWlwSLeAHSPiiE62B8L0VrYFwSbS4JFrAD5Bw2KI1UiIzFC6Yk9ZIicxQuHTSCgORiJYLOotiFxtqz1QHHpuC2Qci/AHAhmeLLirStWeq2fBsEQBSyn8F6xN0Sc+cOXOKqqqldP6V+8WIOmC60+k80dcQdIbLysqO+P3+q4QQ24Cw/6/gPKJZSvkaA5AF+D+sRKq4XZJnIAAAAABJRU5ErkJggg=="
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h4>Status</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
