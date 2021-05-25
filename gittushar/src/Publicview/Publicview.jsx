import React, { Component } from "react";
import HOC from "../../src/HOC";
import "react-confirm-alert/src/react-confirm-alert.css";
import Grid from "@material-ui/core/Grid";
// import "../../userView/UserView.css";
import "./Publicview.css";
import Accordion from "@material-ui/core/Accordion";
import ReactCountryFlag from "react-country-flag";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import RichTextEditor from "react-rte";
import { getBaseUrl } from "../utils/index";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import "react-notifications/lib/notifications.css";
import Card from "@material-ui/core/Card";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { connect } from "react-redux";
// import { getData } from "../../api/index";
// import { USER_LOGIN } from "../../action/appAction";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import "react-notifications/lib/notifications.css";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ReactTooltip from "react-tooltip";
// import { getSiteKey } from "../../Sitekey";
// import ReCAPTCHA from "react-google-recaptcha";
// import Input from "../../Components/Input";
// import ButtonInput from "../../Components/ButtonInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";

class Publicview extends Component {
  constructor(props) {
    super(props);
    console.log("publiv view props=============", props);
    this.state = {
      value: "",
      profileSummary: {},
      imageUrl:
        "https://api-private.atlassian.com/users/df7436dcb94c7b412134807608e18aa8/avatar",
      userdata: {},
      rerumehaedlinedata: {},
      educationdata: {},
      itskilldata: {},
      status: true,
      profiledata: {},
      Profile_Image: {},
      Education: [],
      Employmentdata: [],
      Itskill: [],
      headline: {},
      onlonedata: [],
      profilesummary: {},
      country: "",
      region: "",
      projectdata: [],
      loadingdata: false,
      open_resumeedit: false,
      modal_open: false,
      signupdialog: false,
    };
  }
  scrollToID = (id) => {
    try {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error);
    }
  };
  updatealldataresume = () => {
    let url =
      getBaseUrl() +
      "resumePublicView/" +
      this.props.match.params.userId +
      "/" +
      this.props.match.params.resumeId;

    axios.get(url).then(
      (response) => {
        this.setState({
          Profile_Image: response.data.data.Profile_Image,
          profiledata: response.data.data.Profile,
          Education: response.data.data.Education,
          Employmentdata: response.data.data.Employmentdata,
          Itskill: response.data.data.Itskill,
          headline: response.data.data.headline,
          onlonedata: response.data.data.onlonedata,
          profilesummary: response.data.data.profilesummary,
          projectdata: response.data.data.projectdata,
          loadingdata: false,
        });
      },

      (error) => {}
    );
  };
  componentDidMount() {
    this.setState({
      loadingdata: true,
    });
    this.updatealldataresume();
  }
  contact_details_resume_view = () => {
    let userid = this.props.UserStatus.id;
    if (userid === null || userid === "" || userid === undefined) {
      this.setState({
        modal_open: true,
      });
    } else {
      this.setState({
        open_resumeedit: true,
      });
    }
  };
  get_contact_details_data = (type) => {
    if (this.props.UserStatus.id === this.props.match.params.userId) {
      this.createNotification("error", "sender Id and Receiver Id Same", null);
      return;
    } else {
      try {
        let temp = {
          sender_id: this.props.UserStatus.id,
          resume_id: this.props.match.params.resumeId,
          receiver_id: this.props.match.params.userId,
          sender_name: this.props.UserStatus.User_Name,
          timestamp: Date.now(),
        };
        let url = getBaseUrl() + "contact/Contact_Details";

        axios.post(url, temp).then(
          (response) => {
            console.log("contactdetails=====================", response.data);
            if (response.data.success === 1) {
              this.createNotification("error", response.data.message, null);
              return;
            } else if (response.data.success === 0) {
              this.createNotification("success", response.data.message, null);
              return;
            }
          },

          (error) => {}
        );
      } catch (error) {}
    }
  };
  chat_post_data = async () => {
    try {
      let userid = this.props.UserStatus.id;
      if (userid === null || userid === "" || userid === undefined) {
        this.setState({
          modal_open: true,
        });
      } else {
        if (userid === this.props.match.params.userId) {
          this.createNotification(
            "error",
            "sender Id and Receiver Id Same",
            null
          );
          return;
        } else {
          let temp = {
            sender_id: this.props.UserStatus.id,
            receiver_id: this.props.match.params.userId,
          };
          let url = getBaseUrl() + "chat/chatroom";
          await axios.post(url, temp).then(
            (response) => {
              console.log("chat post data", response.data.room_id);
              this.setState({
                roomId: response.data.room_id,
              });
            },

            (error) => {}
          );
          let chat_open_data = {
            id: this.state.roomId,
            Name:
              this.state.profiledata.First_Name +
              " " +
              this.state.profiledata.Middle_Name +
              " " +
              this.state.profiledata.Last_Name,
            users: this.props.UserStatus.id,
            last_online: null,
            Image_Location: this.state.Profile_Image.Image_Location,
          };
          let tempArrayForChat = [];

          this.props.chatlistdataArr.map((item) => {
            tempArrayForChat.push(item);
          });

          tempArrayForChat.push({
            data: [],
            option: chat_open_data,
          });

          console.log(
            "argument sent to the functiodfgdfgdfgns",
            tempArrayForChat
          );
          console.log("argument sent to the functions", chat_open_data);
          console.log("this.props.dispatch", this.props);
          this.props.dispatch({
            type: "chatlistdataArr",
            data: tempArrayForChat,
          });
        }
      }
    } catch (error) {}
  };
  imageHandler = (e) => {
    let userID = this.props.UserStatus.id;
    let resumeID = this.props.location.state.resumeID;
    let url = getBaseUrl() + "upload_Resume_Profile";
    let formData = new FormData();
    console.log(" e.target.files", e.target.files);
    formData.append("user_id", userID);
    formData.append("resume_id", resumeID);
    formData.append("Image_file", e.target.files[0]);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (res) => {
          this.setState({ imageUrl: res.data.path });
          window.location.reload();
        },
        (error) => {
          console.log("Error", error);
        }
      )
      .catch((e) => {
        console.log("catch error", e);
      });
  };
  showSelectbox = (status) => {
    this.setState({ status });
  };
  copyall() {
    var r = document.createRange();
    console.log(document.getElementById("myInput").value);
    r.selectNode(document.getElementById("myInput"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied Email ID");
  }
  copymobile_No() {
    var r = document.createRange();
    console.log(document.getElementById("phoneno").value);
    r.selectNode(document.getElementById("phoneno"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied Mobile No.");
  }
  createNotification = (type, message, title) => {
    try {
      switch (type) {
        case "info":
          NotificationManager.info(message);
          break;
        case "success":
          NotificationManager.success(message, title);
          break;
        case "warning":
          NotificationManager.warning(message);

          break;

        case "error":
          NotificationManager.error(message);

          break;
        case "info":
          NotificationManager.info(message);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
  logindialogbox = () => {
    if (this.state.loginemail === "") {
      this.createNotification("error", "Please enter an email", null);
      return;
    }

    const emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.state.loginemail.match(emailReg)) {
      this.createNotification("warning", "please enter a valid email id", null);
      return;
    }
    if (this.state.loginpassword === "") {
      this.createNotification("error", "please enter a password", null);
      return;
    }
    if (this.state.loginpassword.length < 8) {
      this.createNotification(
        "warning",
        "Password must be 8 characters long",
        null
      );
      return;
    }
    this.savingdataLogin();
  };
  savingdataLogin = () => {
    try {
      let url = getBaseUrl() + "signin";
      let temp = {
        email_id: this.state.loginemail,
        password: this.state.loginpassword,
        Role: this.state.Role,
        captcha: this.state.captcha,
      };

      console.log("temp00000", temp);

      axios.post(url, temp).then((response) => {
        console.log("login response", response.data);

        if (response.data.success === 0) {
          this.createNotification("error", response.data.message);
        } else if (
          response.data.success === 1 &&
          response.data.message.trim() === "Login Successfully"
        ) {
          console.log("coming here");
          try {
          } catch (error) {
            console.log("error   ", error);
          }

          let userId = this.props.match.params.userId;
          let resumeId = this.props.match.params.resumeId;
          let resumeheadline = this.props.match.params.resumeheadline;
          this.props.history.push(
            `/resume-view/${userId}/${resumeId}/${resumeheadline}`
          );

          this.setState({
            modal_open: false,
          });
        }
      });
    } catch (error) {
      console.log("t and c errir", error);
    }
  };
  signuppage = () => {
    if (this.state.number === "") {
      this.createNotification(
        "error",
        "Please enter your contact number",
        null
      );
      return;
    }
    if (this.state.number === undefined || this.state.number.length < 10) {
      this.createNotification("warning", "Phone number must be 10 digit", null);

      return;
    }
    if (this.state.username === "") {
      this.createNotification("error", "Please insert your Name", null);
      return;
    }

    const nameString = "[a-zA-Z]+\\.?";
    if (this.state.username.length < 4) {
      this.createNotification(
        "warning",
        "Full name must be more than 4 characters.",
        null
      );

      return;
    } else if (this.state.username.length > 20) {
      this.createNotification(
        "warning",
        "Full name must not exceed 20 characters."
      );
    } else if (!this.state.username.match(nameString)) {
      this.createNotification("info", "Please enter characters only.");

      return;
    }

    if (this.state.email === "") {
      this.createNotification("error", "Please enter an email id", null);
      return;
    }
    const emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.state.email.match(emailReg)) {
      this.createNotification("warning", "please enter a valid email id", null);

      return;
    }

    if (this.state.password === "") {
      this.createNotification("error", "please enter a password", null);
      return;
    }
    if (this.state.password.length < 8) {
      this.createNotification(
        "warning",
        "Password must be 8 characters long",
        null
      );

      return;
    }
    if (this.state.confirm_password === "") {
      this.createNotification(
        "error",
        "Please enter the confirm_password",
        null
      );

      return;
    }
    if (this.state.confirm_password !== this.state.password) {
      this.createNotification("warning", "Password must match");

      return;
    }

    this.savedating();
  };
  savedating = () => {
    let url = getBaseUrl() + "register";

    let temp = {
      full_name: this.state.username,
      email_id: this.state.email,
      contact_number: this.state.number,
      password: this.state.password,
      Role: this.state.Role,
      captcha: this.state.captcha,
    };
    axios.post(url, temp).then(
      (response) => {
        console.log("responseddddred", response.data);
        let user_id = response.data.user_id;
        if (user_id !== undefined) {
          this.createNotification("success", response.data.message, null);
          this.props.history.push("/User-Dashbaord", response.data);
        } else {
          this.createNotification("success", response.data.message, null);
        }
        this.setState({});
        return;
      },

      (error) => {}
    );
  };
  contactdetails = () => {
    this.setState({
      signupdialog: true,
      modal_open: false,
    });
  };
  loginpage = () => {
    this.setState({
      signupdialog: false,
      forgot_modal: false,
      modal_open: true,
    });
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  myFunction1 = () => {
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  myFunction2 = () => {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  handleCaptchaResponseChange(response) {
    this.setState({
      captcha: response,
    });
  }
  render() {
    const { country, region } = this.state;
    const toolbarConfig1 = {
      display: [],
      INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD", className: "custom-css-class" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
      ],

      BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
      ],
    };
    const toolbarConfig = {
      display: [
        "INLINE_STYLE_BUTTONS",
        "BLOCK_TYPE_BUTTONS",
        "LINK_BUTTONS",

        "HISTORY_BUTTONS",
      ],
      INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD", className: "custom-css-class" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
      ],

      BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
      ],
    };
    const {
      Profile_Image,

      profiledata,
      Education,
      headline,
      Employmentdata,
      projectdata,
      imageUrl,
      status,
      Itskill,
      onlonedata,
    } = this.state;

    let showimage = getBaseUrl() + Profile_Image.Image_Location;
    let imgage = Profile_Image.Image_Location;
    return (
      <div className="user_main_div_style">
        <div className="scroll"></div>
        <Grid className="maingridLogin2">
          <Grid item md={3} className="user_main_page first_public">
            <Card className="crd1 cardLinkingg ">
              <div className="quickLinkImg">
                {imgage === null ? (
                  <div className="profilepicture text-center">
                    <img src={imageUrl} id="img" className="img mx-auto" />
                  </div>
                ) : (
                  <div className="profilepicture text-center">
                    <img src={showimage} id="img" className="img mx-auto" />
                  </div>
                )}

                {/* <input
                  type="file"
                  accept="image/*"
                  name="image-upload"
                  id="input"
                  onChange={this.imageHandler}
                /> */}
              </div>

              {profiledata.First_Name == undefined ? (
                "N/A"
              ) : (
                <p className="user_fonted1">
                  {profiledata.First_Name} {profiledata.Middle_Name}{" "}
                  {profiledata.Last_Name}
                </p>
              )}

              <div className="public_contact">
                {/* <div className="Views">
                  <Button
                    className="btned get_help_btn1 ml-4"
                    onClick={() => {
                      {
                        this.contact_details_resume_view();
                      }
                    }}
                  >
                    CONTACT DETAILS
                  </Button>
                  <Button
                    className="btned get_help_btn1 mr-3"
                    onClick={() => {
                      {
                        this.chat_post_data();
                      }
                    }}
                  >
                    CHAT
                  </Button>
                </div> */}
              </div>

              <div className="ml-4 mr-5 mt-4 resetPubblic ">
                <p className="qlink"> Quick Links</p>
                <hr style={{ width: "100%" }} />

                <div
                  className="linked "
                  onClick={() => {
                    this.scrollToID("personaled");
                  }}
                >
                  Personal Details
                  <a className="Secondary_content disabledLink"> </a>
                </div>

                <div
                  className="linked "
                  onClick={() => {
                    console.log("coming here");
                    this.scrollToID("resume_headlined");
                  }}
                >
                  Resume Headline
                  <a className="Secondary_content disabledLink"> </a>
                </div>

                <Link
                  activeClass="active"
                  to="employment"
                  spy={true}
                  smooth={true}
                  className="linked "
                  onClick={() => {
                    console.log("coming here");
                    this.scrollToID("employment_reset");
                  }}
                >
                  Employment Details
                </Link>
                <Link
                  activeClass="active"
                  to="eduction"
                  spy={true}
                  smooth={true}
                  className="linked "
                  onClick={() => {
                    this.scrollToID("education_list");
                  }}
                >
                  Education Details
                </Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  className="linked "
                  onClick={() => {
                    this.scrollToID("It_skills");
                  }}
                >
                  IT Skills
                </Link>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  className="linked "
                  onClick={() => {
                    console.log("coming here");
                    this.scrollToID("project_details");
                  }}
                >
                  Project Details
                </Link>

                <div
                  className="linked "
                  onClick={() => {
                    this.scrollToID("profile_summary");
                  }}
                >
                  Profile Summary
                  <a className="Secondary_content disabledLink"> </a>
                </div>

                <Link
                  activeClass="active"
                  to="online"
                  spy={true}
                  smooth={true}
                  className="linked "
                  onClick={() => {
                    this.scrollToID("online_profiles");
                  }}
                >
                  Online Profiles
                </Link>
              </div>
            </Card>
          </Grid>
          <Grid item md={9} xs={11}>
            <div className="user_main_page  public_viewed">
              <LoadingMask
                loading={this.state.loadingdata}
                text={"loading..."}
                className="loadingmask"
              >
                <div className="container mb-4 userview_maindata">
                  <div className="accordf_first">
                    <Accordion
                      id="personal"
                      defaultExpanded={true}
                      className="accordion_shadow"
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          variant="body2"
                          id="resume_headlined"
                          className="skill-set"
                        >
                          RESUME HEADLINE
                        </Typography>
                      </AccordionSummary>
                      <div>
                        { this.state.headline === undefined || this.state.headline.resumehead === undefined ||
                        this.state.headline.resumehead === "N/A" ?  (
                          ""
                        ) : (
                          <h6 className="ml-3 resumeheadlinesize">
                            {" "}
                            {this.state.headline.resumehead}
                          </h6>
                        )}

                        <div className="d-flex">
                          {        }
                          <Typography
                            variant="body2"
                            className="skill-set ml-3"
                          >
                            <p>Skill Set</p>
                          </Typography>
                          {this.state.headline === undefined || this.state.headline.skillset === undefined ||
                        this.state.headline.skillset === "N/A" ?  (
                          ""
                        ) :(<p className="ml-3 resumeheadlinesize">
                        {this.state.headline.skillset}
                      </p>)}
                          
                        </div>
                      </div>
                    </Accordion>
                  </div>

                  {this.state.Employmentdata == undefined ||
                  this.state.Employmentdata == "" ? (
                    ""
                  ) : (
                    <div className="mt-2">
                      <Accordion
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div className="ml-4">
                              <Typography
                                variant="body2"
                                className="skill-set"
                                id="employment_reset"
                              >
                                EMPLOYMENT
                              </Typography>
                            </div>
                            <div className="col-6 d-flex justify-content-end"></div>
                          </div>
                        </AccordionSummary>
                        {this.state.Employmentdata.map((item, index) => {
                          console.log(
                            "sdfhgsad",
                            item.Describe_your_job_Profile
                          );
                          return (
                            <AccordionDetails>
                              <Grid className="maingridLogin">
                                <Grid item md={3}>
                                  <div className="d-flex">
                                    <div className="resume_font">
                                      <span> {item.Start_Date}-</span>

                                      <span>
                                        {" "}
                                        {item.End_Date === null
                                          ? "Present"
                                          : item.End_Date}{" "}
                                      </span>
                                    </div>
                                  </div>
                                </Grid>
                                <Grid item md={9}>
                                  <div>
                                    <div className="d-flex justify-content-between">
                                      <div className="resume_font">
                                        {item.Designation} - {item.Organization}
                                      </div>
                                    </div>
                                    <div className="resume_font">
                                      {item.Notice_Period}
                                    </div>
                                    <div className="resume_font">
                                      <RichTextEditor
                                        className=" rich_padding New_TextEditor"
                                        value={RichTextEditor.createValueFromString(
                                          item.Describe_your_job_Profile.toString(
                                            "html"
                                          ),
                                          "html"
                                        )}
                                        toolbarConfig={toolbarConfig1}
                                      />
                                    </div>
                                  </div>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          );
                        })}
                      </Accordion>
                    </div>
                  )}

                  {this.state.Education == undefined ||
                  this.state.Education == "" ? (
                    ""
                  ) : (
                    <div className="mt-2">
                      <Accordion
                        id="eduction12"
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div className="ml-4">
                              <Typography
                                variant="body2"
                                id="education_list"
                                className="skill-set"
                              >
                                {" "}
                                EDUCATION{" "}
                              </Typography>
                            </div>
                            <div className="col-6 d-flex justify-content-end"></div>
                          </div>
                        </AccordionSummary>
                        {this.state.Education.map((item, index) => (
                          <AccordionDetails>
                            <Grid className="maingridLogin">
                              <Grid item md={3}>
                                {this.state.educationdata == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex">
                                    <div className="resume_font">
                                      {item.PassingOutYear}
                                    </div>
                                  </div>
                                )}
                              </Grid>
                              <Grid item md={9}>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    {this.state.educationdata == undefined ? (
                                      ""
                                    ) : (
                                      <div className="resume_font">
                                        {" "}
                                        {item.Education} in{" "}
                                        {item.Specialization}
                                      </div>
                                    )}
                                    {this.state.educationdata == undefined ? (
                                      ""
                                    ) : (
                                      <div className="resume_font">
                                        {" "}
                                        {item.Course} From {item.University}{" "}
                                      </div>
                                    )}
                                  </div>
                                  {this.state.educationdata == undefined ? (
                                    ""
                                  ) : (
                                    <div className="resume_font"> </div>
                                  )}
                                </div>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  {this.state.Itskill == undefined ||
                  this.state.Itskill == "" ? (
                    ""
                  ) : (
                    <div className="mt-2">
                      <Accordion
                        id="eduction"
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div className="ml-4">
                              <Typography
                                variant="body2"
                                className="skill-set"
                                id="It_skilled"
                              >
                                {" "}
                                IT SKILLS{" "}
                              </Typography>
                            </div>
                            <div className="col-6 d-flex justify-content-end"></div>
                          </div>
                        </AccordionSummary>

                        <AccordionDetails>
                          {this.state.itskilldata !== undefined && (
                            <div className="d-flex tabling_new ">
                              <div className="table-margin">
                                <table className="table skilleddd tableit table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">Skills</th>
                                      <th scope="col">Version</th>
                                      <th scope="col">Last Used</th>
                                      <th scope="col">Experience</th>
                                    </tr>
                                  </thead>
                                  {this.state.Itskill.map((item, index) => (
                                    <tbody>
                                      <tr>
                                        <td>{item.ItSkils}</td>
                                        <td>{item.Version}</td>
                                        <td>{item.Last_used}</td>
                                        <td>{item.Expriences}</td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  ))}
                                </table>
                              </div>
                            </div>
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                  {this.state.projectdata == undefined ||
                  this.state.projectdata == "" ? (
                    ""
                  ) : (
                    <div className="mt-2">
                      <Accordion
                        id="project_details12"
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div className="ml-4">
                              <Typography
                                variant="body2"
                                className="skill-set"
                                id="project_details"
                              >
                                PROJECT DETAILS
                              </Typography>
                            </div>
                          </div>
                        </AccordionSummary>
                        {this.state.projectdata.map((item) => {
                          let describeprojectedd = this.state.describeproject;
                          return (
                            <AccordionDetails>
                              <Grid className="maingridLogin">
                                <Grid item md={3}>
                                  <div className="resume_font">
                                    {/* {item.Start_Date}-{item.End_Date} */}
                                  </div>
                                  <div className="resume_font">
                                    <RichTextEditor
                                      className="mt-3 rich_padding Project_Description"
                                      value={RichTextEditor.createValueFromString(
                                        item.Describe_Your_Project.toString(
                                          "html"
                                        ),
                                        "html"
                                      )}
                                      toolbarConfig={toolbarConfig1}
                                    />
                                  </div>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          );
                        })}
                      </Accordion>
                    </div>
                  )}
                  {this.state.profilesummary == undefined ||
                  this.state.profilesummary == "" ? (
                    ""
                  ) : (
                    <div className="  mt-2 userview_maindata ">
                      <Accordion
                        id="personal"
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography
                            variant="body2"
                            className="skill-set"
                            id="profile_summary"
                          >
                            PROFILE SUMMARY
                          </Typography>
                        </AccordionSummary>
                        <div>
                          <h6 className="ml-3">
                            {" "}
                            {this.state.profilesummary.Summary}
                          </h6>
                        </div>
                      </Accordion>
                    </div>
                  )}
                  {this.state.onlonedata == undefined ||
                  this.state.onlonedata == "" ? (
                    ""
                  ) : (
                    <div className="mt-2">
                      <Accordion
                        id="onlineee"
                        defaultExpanded={true}
                        className="accordion_shadow"
                      >
                        <AccordionSummary
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div className="ml-4">
                              <Typography
                                variant="body2"
                                className="skill-set"
                                id="online_profiles"
                              >
                                {" "}
                                ONLINE PROFILES{" "}
                              </Typography>
                            </div>
                            <div className="col-6 d-flex justify-content-end"></div>
                          </div>
                        </AccordionSummary>

                        <AccordionDetails>
                          <div className="d-flex tabling_new">
                            <div className="table-margin  ">
                              <table className="table smoothly tableit table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Social_Profile</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Url</th>
                                  </tr>
                                </thead>
                                {this.state.onlonedata.map((item, index) => (
                                  <tbody>
                                    <tr className="resumeheadlinesize">
                                      <td>{item.Social_Profile}</td>
                                      <td>{item.Description}</td>
                                      <td>{item.Url}</td>
                                    </tr>
                                  </tbody>
                                ))}
                              </table>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                  <div className="mt-2">
                    <Accordion
                      id="personal"
                      defaultExpanded={true}
                      className="accordion_shadow"
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          variant="body2"
                          className="skill-set"
                          id="personaled"
                        >
                          PERSONAL DETAILS{" "}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="d-flex">
                          <div className="m-2 redgreen_class">
                            <div className="resume_font">Full Name</div>
                            <div className="resume_font">Gender</div>
                            <div className="resume_font">Marital Status</div>
                            <div className="resume_font">Email ID</div>
                            <div className="resume_font">Mobile No.</div>
                            <div className="resume_font">Date of Birth</div>
                            <div className="resume_font">Permanent Address</div>
                            <div className="resume_font">Area Pin Code</div>
                            <div className="resume_font">Nationality</div>
                          </div>

                          <div className="m-2 ml-5 redgreen_class profiles-class">
                            {profiledata.First_Name == undefined ||
                            profiledata.First_Name == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font caplitize">
                                {profiledata.First_Name}{" "}
                                {profiledata.Middle_Name}{" "}
                                {profiledata.Last_Name}
                              </div>
                            )}
                            {profiledata.Gender == undefined ||
                            profiledata.Gender == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Gender}
                              </div>
                            )}
                            {profiledata.Marital_Status == undefined ||
                            profiledata.Marital_Status == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Marital_Status}{" "}
                              </div>
                            )}
                            {profiledata.Email_Id == undefined ||
                            profiledata.Email_Id == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Email_Id}
                              </div>
                            )}
                            {profiledata.Mobile_No == undefined ||
                            profiledata.Mobile_No == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Mobile_No}
                              </div>
                            )}
                            {profiledata.Date_of_Birth == undefined ||
                            profiledata.Date_of_Birth == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Date_of_Birth}
                              </div>
                            )}
                            {profiledata.Permanent_Addresh == undefined ||
                            profiledata.Permanent_Addresh == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font permanent_red">
                                {profiledata.Permanent_Addresh}
                              </div>
                            )}
                            {profiledata.Area_Pin_code == undefined ||
                            profiledata.Area_Pin_code == "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font">
                                {profiledata.Area_Pin_code}
                              </div>
                            )}
                            {profiledata.nationality === undefined ||
                            profiledata.nationality === "" ? (
                              "N/A"
                            ) : (
                              <div className="resume_font redgreen_classessd">
                                {profiledata.nationality}, {profiledata.region}{" "}
                                <ReactCountryFlag
                                  className="ml-2"
                                  countryCode={profiledata.nationality}
                                  svg
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </LoadingMask>
            </div>
          </Grid>
        </Grid>
        <div>
          <Dialog
            open={this.state.open_resumeedit}
            aria-labelledby="form-dialog-title"
            maxWidth="xs"
            fullWidth="fullWidth"
          >
            <DialogTitle id="simple-dialog-title" className="contact_center">
              <label className="updateresume"> Contact Details</label>
              <span
                className="floatright"
                onClick={() => {
                  this.setState({
                    open_resumeedit: false,
                  });
                }}
              >
                <i className="fa fa-times " aria-hidden="true"></i>{" "}
              </span>
            </DialogTitle>
            <DialogContent className="input_padding_hide">
              <div>
                <div>
                  <div className="emailid_fontsize">Email ID:</div>
                  {profiledata.Email_Id == undefined ||
                  profiledata.Email_Id == "" ? (
                    "N/A"
                  ) : (
                    <div className="email_copy_flex">
                      <div className="hide_no_font pl-3" id="myInput">
                        {" "}
                        {profiledata.Email_Id}
                      </div>
                      {profiledata.Email_Id !== "**********" ? (
                        <div className="pl-2">
                          <FileCopyIcon onClick={this.copyall} />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
                <div className="pt-3">
                  <div className="emailid_fontsize">Mobile No. :</div>
                  {profiledata.Mobile_No == undefined ||
                  profiledata.Mobile_No == "" ? (
                    "N/A"
                  ) : (
                    <div className="email_copy_flex">
                      <div className="hide_no_font pl-3" id="phoneno">
                        {profiledata.Mobile_No}
                      </div>
                      {profiledata.Mobile_No !== "**********" ? (
                        <div className="pl-2">
                          <FileCopyIcon onClick={this.copymobile_No} />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
                {profiledata.Mobile_No == "**********" ? (
                  <div>
                    <div className="candidate_hidden_color ">
                      "Candidate hidden the Contact Details for Pubilc View"
                    </div>
                    <div>You can still Send </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {profiledata.Mobile_No == "**********" ? (
                <div>
                  <div className="get_contect_center">
                    <Button
                      className="get_button_color"
                      onClick={() => {
                        this.get_contact_details_data();
                      }}
                    >
                      Get Contect Details
                    </Button>
                    <NotificationContainer />
                  </div>
                  <div>
                    Request
                    <i
                      className="fa fa-exclamation-circle Post_alert1"
                      aria-hidden="true"
                      data-tip
                      data-for="registerTip"
                    ></i>
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                      <ul>
                        <li>Contact detail are hidden</li>
                        <li>
                          Once Candidate approve you contact Request. You will
                          get notified via mail.
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>
                </div>
              ) : (
                ""
              )}
            </DialogContent>
          </Dialog>
        </div>
        <Dialog
          className="dialogsettle"
          open={this.state.modal_open}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
        >
          <div className="personal_dialog_main">
            <DialogTitle className="resumedialog_heading">
              Login
              <span
                className="floatright"
                onClick={() => {
                  this.setState({
                    modal_open: false,
                  });
                }}
              >
                <i className="fa fa-times time_btn" aria-hidden="true"></i>{" "}
              </span>
            </DialogTitle>
            <div className="dailog_width1 logininput_margin">
              <div className="ml-5 mr-5">
                <div>
                  <fieldset className="inputHome padii222 ">
                    <i
                      className="fa fa-envelope signup-icon"
                      aria-hidden="true"
                    ></i>

                    {/* <Input
                      className="bodernull111 input_typing"
                      type="text"
                      name="full_name"
                      placeholder="Email ID"
                      autocomplete="off"
                      value={this.state.loginemail}
                      onChange={(e) =>
                        this.setState({ loginemail: e.target.value })
                      }
                    /> */}
                  </fieldset>

                  <fieldset className="inputHome padii222 ">
                    <i className="fa fa-key signup-icon" aria-hidden="true"></i>

                    {/* <Input
                      className="bodernull111 input_typing"
                      type="password"
                      name="full_name"
                      id="myInput2"
                      placeholder="Password"
                      autocomplete="off"
                      value={this.state.loginpassword}
                      onChange={(e) => {
                        this.setState({
                          loginpassword: e.target.value,
                        });
                      }}
                    /> */}
                    <i
                      className="fa fa-eye signup-icon"
                      aria-hidden="true"
                      onClick={this.myFunction2}
                    ></i>
                  </fieldset>

                  <div>
                    {/* <ReCAPTCHA
                      className=" restedding "
                      sitekey={getSiteKey()}
                      onChange={this.handleCaptchaResponseChange}
                    /> */}
                  </div>
                  {/* <div>
                    <fieldset>
                      <ButtonInput
                        className="mt-2 btned"
                        type="submit"
                        value="Sign In"
                        onClick={this.logindialogbox}
                        disabled={
                          this.state.loginemail === "" ||
                          this.state.loginpassword === ""
                        }
                      />
                    </fieldset>
                    <NotificationContainer />
                  </div> */}
                  <div>
                    <p className="alerday_account mt-3">
                      Don't have an account yet ?{" "}
                      <span
                        title="Sign Up"
                        className="signupcolor"
                        onClick={this.contactdetails}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
        <Dialog
          open={this.state.signupdialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="signup_dialog">
            <div>
              <h1 className="dialogtop">
                Si<label className="underscore">gn U</label>p{" "}
                <span
                  className="floatright"
                  onClick={() => {
                    this.setState({
                      signupdialog: false,
                    });
                  }}
                >
                  <i className="fa fa-times time_btn" aria-hidden="true"></i>{" "}
                </span>
              </h1>
            </div>
            <div className="ml-5 mr-5">
              <div className="logininput_margin">
                <fieldset className="padii111">
                  <PhoneInput
                    placeholder={"Mobile no. *"}
                    country={"in"}
                    tabindex="1"
                    value={this.state.number}
                    onChange={(e) => {
                      console.log(e);
                      if (isNaN(e)) {
                        return;
                      }
                      this.setState({
                        number: "+" + e,
                      });
                    }}
                  />
                </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-user signup-icon" aria-hidden="true"></i>

                  {/* <Input
                    className="bodernull111 input_typing"
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    autocomplete="off"
                    value={this.state.username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  /> */}
                </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i
                    className="fa fa-envelope signup-icon"
                    aria-hidden="true"
                  ></i>

                  {/* <Input
                    className="bodernull111 input_typing"
                    type="text"
                    name="full_name"
                    placeholder="Email ID"
                    autocomplete="off"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  /> */}
                </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-key signup-icon" aria-hidden="true"></i>

                  {/* <Input
                    className="bodernull111 input_typing"
                    id="myInput"
                    type="password"
                    name="full_name"
                    placeholder="Password"
                    autocomplete="off"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  /> */}
                  <i
                    className="fa fa-eye  signup-icon"
                    aria-hidden="true"
                    onClick={this.myFunction}
                  ></i>
                </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-key signup-icon" aria-hidden="true"></i>

                  {/* <Input
                    className="bodernull111 input_typing"
                    type="password"
                    id="myInput1"
                    name="full_name"
                    placeholder="Confirm Password"
                    autocomplete="off"
                    value={this.state.confirm_password}
                    onChange={(e) =>
                      this.setState({ confirm_password: e.target.value })
                    }
                  /> */}
                  <i
                    className="fa fa-eye signup-icon"
                    aria-hidden="true"
                    onClick={this.myFunction1}
                  ></i>
                </fieldset>
                <p className="terms3 mt-3">
                  {/* <input
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={() => this.setState({ checked: true })}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />{" "} */}
                  I accept terms & condition{" "}
                </p>
                <div className="homeAsrecuriter">
                  {/* <ReCAPTCHA
                    className=" demotesteddd"
                    sitekey={getSiteKey()}
                    onChange={this.handleCaptchaResponseChange}
                  /> */}
                </div>

                <fieldset>
                  {/* <ButtonInput
                    className="text-center btned"
                    type="submit"
                    value="Sign Up"
                    onClick={this.signuppage}
                    disabled={
                      this.state.number === "" ||
                      this.state.password === "" ||
                      this.state.username === "" ||
                      this.state.email === "" ||
                      this.state.confirm_password === ""
                    }
                  /> */}
                </fieldset>
                <NotificationContainer />
                <p className="alerday_account mt-3">
                  Already have an account ?{" "}
                  <span
                    className="signintext"
                    onClick={this.loginpage}
                    title="Sign In"
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
// let role = localStorage.getItem("Role");
// let return_data;
// if (role === "Candidate") {
//   return_data = Candidate_HOC(PublicView);
// } else if (role === "Recruiter") {
//   return_data = Recruiter_HOC(PublicView);
// } else {
//   return_data = HOC(PublicView);
// }
// const mapStateToProps = (state, ownProps) => ({
//   UserStatus: getData(state, USER_LOGIN) || {},
//   chatlistdataArr: getData(state, "chatlistdataArr") || [],
// });
export default HOC(Publicview);
