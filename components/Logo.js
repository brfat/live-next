import React from "react";
import styles from "../styles/Home.module.css"

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="data:image/svg+xml,%3Csvg width='131' height='25' viewBox='0 0 131 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M69.7 8.114c-1.848 0-3.334.934-4.21 2.53V8.405h-3.16v14.182h3.161v-7.684c0-2.238 1.371-3.677 3.428-3.677 2.019 0 3.352 1.459 3.352 3.677v7.684h3.18v-8.093c.02-3.949-2.19-6.38-5.75-6.38zm21.497.439h-3.532l-3.804 9.76-3.824-9.76h-3.493l5.939 14.035h2.775l5.939-14.035zm15.09 6.607c0-4.123-3.103-7.046-6.923-7.046-4.073 0-7.292 3.175-7.292 7.279 0 4.22 3.219 7.414 7.35 7.414 3.471 0 6.167-1.955 6.69-4.936h-3.238c-.291 1.22-1.648 2.013-3.394 2.013-2.288 0-3.723-1.297-4.131-3.388h10.841c.058-.251.097-.967.097-1.335zm-10.841-1.393c.466-1.742 1.842-2.749 3.763-2.749 1.939 0 3.296 1.123 3.587 2.749h-7.35zm19.408 9.04c3.1 0 5.43-1.897 5.43-4.452 0-5.885-8.164-3.272-8.164-6.117 0-.89.886-1.452 2.156-1.452 1.464 0 2.445.774 2.581 1.742h3.215c-.308-2.865-2.849-4.414-5.738-4.414-3.273 0-5.314 1.878-5.314 4.336 0 5.363 8.125 2.924 8.125 5.944 0 .987-.924 1.645-2.464 1.645-1.579 0-2.792-.813-2.908-2.052h-3.08c.308 3.04 2.714 4.82 6.161 4.82zm16.126-11.315V8.409h-3.69V4.605h-3.227V8.41h-2.686v3.083h2.686v5.794c0 3.61 2.067 5.521 5.198 5.521.522 0 1.237-.058 1.739-.176v-3.004a4.496 4.496 0 01-1.044.117c-1.565 0-2.647-.722-2.647-2.536v-5.736h3.671v.02zM.026 10.28c-.058 1.116 0 2.25 0 3.347v10.715h6.067v-9.81c0-3.06-.019-5.772 0-6.33.117-2.654.837-4.385 2.217-5.79H8c-2.957 0-5.738 1.674-7.08 4.27C.319 7.819.105 9.05.027 10.28z' fill='%234C0677'/%3E%3Cpath d='M13.763 0c-2.28 0-4.21.885-5.671 2.386 4.54 0 7.463 3.04 7.639 7.909.039 1.116.058 7.081.058 7.081v6.966h6.08v-9.41c0-2.848.02-5.31-.175-7.004C21.129 3.156 18.186 0 13.763 0zm31.7 14.72c.059-1.116 0-2.251 0-3.347V.658h-6.067v9.81c0 3.06.019 5.771 0 6.33-.117 2.654-.837 4.385-2.217 5.79h.31c2.957 0 5.738-1.674 7.08-4.271.602-1.135.816-2.347.894-3.597z' fill='%234C0677'/%3E%3Cpath d='M31.727 25c2.28 0 4.209-.885 5.67-2.386-4.54 0-7.463-3.04-7.639-7.91-.039-1.115-.058-3.886-.058-7.08V.658h-6.08v9.41c0 2.847-.02 5.31.175 7.004C24.36 21.825 27.303 25 31.726 25zM55.326 8.433v14.155h3.205V8.433h-3.205zm-.433-3.965c0-1.1.924-2.056 2.05-2.056s2.078.956 2.078 2.056a2.091 2.091 0 01-2.078 2.084c-1.126 0-2.05-.926-2.05-2.084z' fill='%234C0677'/%3E%3C/svg%3E" alt="logo"></img>
      <a className="header-button header-button--login" href="#">Login<svg width="18" height="15" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.5997 2.28947V0.5H16.4443C19.4026 0.5 20.1422 3.0848 20.1422 4.37719V13.6228C20.1422 16.486 17.6769 17.4006 16.4443 17.5H13.5997V15.7105H16.4443C18.0372 15.7105 18.151 14.3187 18.151 13.6228V4.37719C18.151 2.70702 17.108 2.28947 16.4443 2.28947H13.5997Z" fill="#4C0677"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.33655 3.41321L14.4329 8.50952C14.563 8.63961 14.636 8.81606 14.636 9.00004C14.636 9.18403 14.5629 9.36049 14.4328 9.49059L9.33627 14.5871L8.35526 13.6061L12.2676 9.69382L1.47578 9.69457L1.47489 8.30636L12.2667 8.30561L8.35492 4.39386L9.33606 3.41272L9.33655 3.41321Z" fill="#4C0677"></path></svg></a>
      </div>
  );
};

export default Logo;
