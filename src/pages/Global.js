import Sidebar from "../components/Sidebar";
import "../css/GlobalStyle.css";
import Header from "../components/Header";
// import Container from "../components/Container";
import '../css/Global.css';
import { TextField, InputAdornment, Icon } from "@mui/material";
function Global() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <div className="header">

          </div>
          <div className="content">
            
            <div className="sidebar">
            
            </div>
            
            <div className="post-global">
              {/* post 1 */}
              <div className="post-1">
                <div className="post-head">
                  <img className="photo-icon" alt="" src="../assets/SVG/photo1.svg" />
                  <div className="name-div1">Ngo****</div>
                </div>
                  {/* <textarea placeholder="What's on your mind?"></textarea> */}
                  {/* <TextField className="outlined-basic" label="Mindset" variant="outlined" /> */}
                  <div className="post-text">
                  <TextField
                    className="textf"
                    sx={{ width: 400 }}
                    color="primary"
                    variant="outlined"
                    multiline
                    rows={2}
                    // maxRows={5}
                    label="What's on your mind?"
                    // margin="none"
                  />
                  </div>
              </div>
              
              {/* POST 2 */}
              <div className="post-2">
                <div className="post-head">
                <img className="photo-icon2" alt="" src="../assets/SVG/photo2.svg" />
                <div className="name-div1">Jes****</div>
                </div>
                <div className="post-div">
                  <p className="post-status">Vì em không yêu anh như anh yêu em</p>
                  <p className="post-status">Vì em xem anh chỉ là nhất thời</p>
                  <p className="post-status">
                    Người mới chơi vơi như anh làm sao anh mơ có em
                  </p>
                  <p className="post-status">Mãi sau này xa nhau anh mới thấu</p>
                </div>
              </div>

              {/* POST 3 */}
              <div className="post-2">
                <div className="post-head">
                <img className="photo-icon3" alt="" src="../assets/SVG/photo3.svg" />
                <div className="name-div1">Văn****</div>
                </div>
                <div className="post-div">
                  <p className="post-status">Sau này gặp nhau anh muốn biết</p>
                  <p className="post-status">Mùa hoa đẹp nhất em có nhớ gì</p>
                  <p className="post-status">Ngày đó yêu nhau lúc xuân thì</p>
                  <p className="post-status">Mà điều gì làm em quay lưng đi</p>
                </div>
              </div>

              {/* POST 4 */}
              <div className="post-2">
                <div className="post-head">
                <img className="photo-icon4" alt="" src="../assets/SVG/photo4.svg" />
                <div className="name-div1">Quố****</div>
                </div>
                <div className="post-div">
                  <p className="post-status">Mãi sau này anh mới biết</p>
                  <p className="post-status">Bông hoa đó không phải của anh</p>
                  <p className="post-status">
                    Chẳng qua là anh đã đi ngang qua đúng mùa hoa đẹp nhất
                  </p>
                  <img className="image-1-icon" alt="" src="../assets/Images/image-1@2x.png" />
                </div>
              </div>
            </div>   
        </div>
      </div>
  </>
  );
};

export default Global;
