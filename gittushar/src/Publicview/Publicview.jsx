import React, { Component } from 'react'
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-scroll";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { DialogActions } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "./Publicview.css";
import HOC from "../../src/HOC";

class Publicview extends Component {
    render() {
        return (
            <div>
                  <div className="user_main_div_style">
        <div className="scroll"></div>
        <Grid className="maingridLogin2">
          <Grid item md={3} className="user_main_page first_public">
            <Card className="crd1 cardLinkingg ">
              <div className="quickLinkImg">
                {/* {imgage === null ? (
                  <div className="profilepicture text-center">
                    <img src={imageUrl} id="img" className="img mx-auto" />
                  </div>
                ) : (
                  <div className="profilepicture text-center">
                    <img src={showimage} id="img" className="img mx-auto" />
                  </div>
                )} */}
{/* 
                <input
                  type="file"
                  accept="image/*"
                  name="image-upload"
                  id="input"
                  onChange={this.imageHandler}
                /> */}
              </div>

              {/* {profiledata.First_Name == undefined ? (
                "N/A"
              ) : (
                <p className="user_fonted1">
                  {profiledata.First_Name} {profiledata.Middle_Name}{" "}
                  {profiledata.Last_Name}
                </p> */}
              {/* )} */}

              <div className="public_contact">
                <div className="Views">
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
                </div>
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
                        <h6 className="ml-3 resumeheadlinesize">
                          {" "}
                         
                        </h6>
                        <div className="d-flex">
                          <Typography
                            variant="body2"
                            className="skill-set ml-4"
                          >
                            <p>Skill Set</p>
                          </Typography>
                          <p className="ml-3 resumeheadlinesize">
                          
                          </p>
                        </div>
                      </div>
                    </Accordion>
                  </div>

                 
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
                        
                         
                            <AccordionDetails>
                              <Grid className="maingridLogin">
                                <Grid item md={3}>
                                  <div className="d-flex">
                                    <div className="resume_font">
                                      <span></span>

                                      <span>
                                       
                                      </span>
                                    </div>
                                  </div>
                                </Grid>
                                <Grid item md={9}>
                                  <div>
                                    <div className="d-flex justify-content-between">
                                      <div className="resume_font">
                                       
                                      </div>
                                    </div>
                                    <div className="resume_font">
                                     
                                    </div>
                                    <div className="resume_font">
                                      {/* <RichTextEditor
                                        className=" rich_padding New_TextEditor"
                                        value={RichTextEditor.createValueFromString(
                                          item.Describe_your_job_Profile.toString(
                                            "html"
                                          ),
                                          "html"
                                        )}
                                        toolbarConfig={toolbarConfig1}
                                      /> */}
                                    </div>
                                  </div>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          
                      
                      </Accordion>
                    </div>
                 
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
                        
                          <AccordionDetails>
                            <Grid className="maingridLogin">
                              <Grid item md={3}>
                               
                                  <div className="d-flex">
                                    <div className="resume_font">
                                     
                                    </div>
                                  </div>
                               
                              </Grid>
                              <Grid item md={9}>
                                <div className="d-flex justify-content-between">
                                  <div>
                                   
                                      <div className="resume_font">
                                        {" "}
                                       
                                      </div>
                                   
                                      <div className="resume_font">
                                        {" "}
                                        
                                      </div>
                                  
                                  </div>
                                  
                                    <div className="resume_font"> </div>
                                  
                                </div>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        
                      </Accordion>
                    </div>
                 

                 
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
                                  
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                               
                                </table>
                              </div>
                            </div>
                         
                        </AccordionDetails>
                      </Accordion>
                    </div>
                 
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
                      
                            <AccordionDetails>
                              <Grid className="maingridLogin">
                                <Grid item md={3}>
                                  <div className="resume_font">
                                    {/* {item.Start_Date}-{item.End_Date} */}
                                  </div>
                                  <div className="resume_font">
                                    {/* <RichTextEditor
                                      className="mt-3 rich_padding Project_Description"
                                      value={RichTextEditor.createValueFromString(
                                        item.Describe_Your_Project.toString(
                                          "html"
                                        ),
                                        "html"
                                      )}
                                      toolbarConfig={toolbarConfig1}
                                    /> */}
                                  </div>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          
                      </Accordion>
                    </div>
            
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
                           
                          </h6>
                        </div>
                      </Accordion>
                    </div>
                
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
                               
                                  <tbody>
                                    <tr className="resumeheadlinesize">
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                               
                              </table>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                 
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

                          {/* <div className="m-2 ml-5 redgreen_class profiles-class">
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
                          </div> */}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              
            </div>
          </Grid>
        </Grid>
        <div>
          {/* <Dialog
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
            </DialogTitle> */}
            {/* <DialogContent className="input_padding_hide">
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
            </DialogContent> */}
          {/* </Dialog> */}
        </div>
        {/* <Dialog
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
                    ></i> */}

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
                  {/* </fieldset> */}
{/* 
                  <fieldset className="inputHome padii222 ">
                    <i className="fa fa-key signup-icon" aria-hidden="true"></i> */}

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
                    {/* <i
                      className="fa fa-eye signup-icon"
                      aria-hidden="true"
                      onClick={this.myFunction2}
                    ></i>
                  </fieldset> */}

                  {/* <div> */}
                    {/* <ReCAPTCHA
                      className=" restedding "
                      sitekey={getSiteKey()}
                      onChange={this.handleCaptchaResponseChange}
                    /> */}
                  {/* </div>
                  <div>
                    <fieldset> */}
                      {/* <ButtonInput
                        className="mt-2 btned"
                        type="submit"
                        value="Sign In"
                        onClick={this.logindialogbox}
                        disabled={
                          this.state.loginemail === "" ||
                          this.state.loginpassword === ""
                        }
                      /> */}
                    {/* </fieldset> */}
                    {/* <NotificationContainer /> */}
                  {/* </div> */}
                  {/* <div>
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
        </Dialog> */}
        {/* <Dialog
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
                <fieldset className="padii111"> */}
                  {/* <PhoneInput
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
                  /> */}
                {/* </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-user signup-icon" aria-hidden="true"></i> */}

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
                {/* </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i
                    className="fa fa-envelope signup-icon"
                    aria-hidden="true"
                  ></i> */}

                  {/* <Input
                    className="bodernull111 input_typing"
                    type="text"
                    name="full_name"
                    placeholder="Email ID"
                    autocomplete="off"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  /> */}
                {/* </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-key signup-icon" aria-hidden="true"></i> */}

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
                  {/* <i
                    className="fa fa-eye  signup-icon"
                    aria-hidden="true"
                    onClick={this.myFunction}
                  ></i> */}
                {/* </fieldset>
                <fieldset className="inputHome padii222 ">
                  <i className="fa fa-key signup-icon" aria-hidden="true"></i> */}

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
                  {/* <i
                    className="fa fa-eye signup-icon"
                    aria-hidden="true"
                    onClick={this.myFunction1}
                  ></i> */}
                {/* </fieldset>
                <p className="terms3 mt-3"> */}
                  {/* <input
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={() => this.setState({ checked: true })}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />{" "} */}
                  {/* I accept terms & condition{" "}
                </p> */}
                {/* <div className="homeAsrecuriter"> */}
                  {/* <ReCAPTCHA
                    className=" demotesteddd"
                    sitekey={getSiteKey()}
                    onChange={this.handleCaptchaResponseChange}
                  /> */}
                {/* </div> */}

                {/* <fieldset> */}
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
                {/* </fieldset> */}
                {/* <NotificationContainer /> */}
                {/* <p className="alerday_account mt-3">
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
        </Dialog> */}
      </div>
            </div>
        )
    }
}

export default HOC(Publicview)
