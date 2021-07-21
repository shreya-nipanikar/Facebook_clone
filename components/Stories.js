import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Shreya Nipanikar",
    src: "https://qrius.com/wp-content/uploads/2019/07/cute.jpeg",
    profile:
      "https://thumbs.dreamstime.com/b/cute-little-cartoon-hare-red-pants-white-180961406.jpg",
  },
  {
    name: "Shradha Thanekar",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    profile:
      "https://i.pinimg.com/originals/87/68/37/876837a437f1875c96ca6d6883abbfa9.jpg",
  },
  {
    name: "Satish Sirsat",
    src: "https://1.bp.blogspot.com/-r82jDTJCrHg/Xlo6M3OBT4I/AAAAAAAAChk/vVkAJKTjSd02SXGc35-Vl97sEkG8FcCvQCNcBGAsYHQ/s1600/Anahita-2BHashemzadeh-2BIn-2BBlue-2BColor-2BDress.jpg",
    profile:
      "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    name: "Rahul Chowandi",
    src: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    profile:
      "http://wallpup.com/wp-content/uploads/2013/04/Cute-Asian-Girl-Wallpaper-HD.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
