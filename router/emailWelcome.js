const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const EmailMarketing = require('../models/emailMarketing');
const nodemailer = require('nodemailer'); // For sending emails
// Add other CRUD operations (e.g., get user by ID, update user, delete user) here
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'noreply.ewallet.hcmut@gmail.com',
        pass: 'wsxweqdjcbdzenfn'
    }
});

router.post('/email-welcome', (req, res) => {
    try {
      const { email, name } = req.body;
  
      // Generate a random 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
  
      // Send the OTP to the user's email
      const mailOptions = {
        from: {
          name: 'E-Wallet',
          address: 'noreply.ewallet.hcmut@gmail.com',
        },
        to: email,
        subject: `Cảm ơn ${name} đã quan tâm về sản phẩm mới của chúng tôi`,
        // text: `Hello ${name},\n\nThank you for choosing E-Wallet. Use this OTP to change your account password on E-Wallet.\n\nOTP: ${otp}\n\nRemember, never share this OTP with anyone.\n\nRegards,\nTeam E-Wallet`,
        html: `
        <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:660px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.menu-checkbox[type=checkbox]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open,
			.menu-checkbox[type=checkbox]~.menu-links span.sep {
				display: none !important;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-links,
			.menu-checkbox[type=checkbox]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links>a,
			.menu-checkbox[type=checkbox]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.first {
				display: table-footer-group !important;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-8 td.column.first .border,
			.row-8 td.column.last .border {
				padding: 5px 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}
		}

		#memu-r0c0m3:checked~.menu-links {
			background-color: transparent !important;
		}

		#memu-r0c0m3:checked~.menu-links a,
		#memu-r0c0m3:checked~.menu-links span {
			color: #ffffff !important;
		}
	</style>
</head>

<body>

		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td align="center" valign="top" background="https://assets-global.website-files.com/639f339fd4fdced020c3fd4a/64fce9cf84db786d691b9995_Coca-Cola%20(red).webp" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
							<table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">

								<tbody><tr>
									<td height="40"></td>
								</tr>


								<tr>
									<td align="center" style="line-height: 0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://thietkelogo.mondial.vn/wp-content/uploads/2023/08/Coca-Cola_bottle_cap.svg_.png" width="109" height="103" alt="logo">
									</td>
								</tr>



								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
										COCA <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px;">COLA</span>
									</td>
								</tr>





								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
										Cảm ơn ${name} đã quan tâm về sản phẩm mới của công ty Coca Cola. Chúng tôi sẽ thông báo tới cho bạn khi sản phẩm được ra mắt
									</td>
								</tr>


								<tr>
									<td height="50"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>




<!-- END FOOTER -->

						
					
				</tbody></table>
</body>

</html>
        `
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ error: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'sent successfully' });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
  module.exports = router;
