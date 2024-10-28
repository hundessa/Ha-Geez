import ProfileEditForm from "../../Components/Profile_Edit_Component/ProfileEditForm"
import { useUser } from "../../../../Context/AuthContext"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../../config/firebaseConfig"
import axios from "axios"
import Student_Header from "../Student_Landing_Page/Components/Student_Header"
import Student_side_navbar from "../Student_Landing_Page/Components/Student_side_navbar"

const Student_profile_page = () => {

    const { user } = useUser();

    const handleSaveProfile = async (updatedProfile, selectedFile) => {
        let profilePictureUrl = updatedProfile.profilepicture;

        if (selectedFile) {
            const storageRef = ref(storage, `profilePictures/${Date.now()}_${selectedFile.name}`);
            await uploadBytes(storageRef, selectedFile);
            profilePictureUrl = await getDownloadURL(storageRef);
        }

        const profileDataToSave = { ...updatedProfile, profilepicture: profilePictureUrl };

        try {
            const response = await axios.post("http://localhost:4000/profile-edit", profileDataToSave, { withCredentials: true });
            if (response.status === 200) alert("Profile updated successfully!");
            else alert("Failed to update profile");
        } catch (error) {
            console.error("Error updating profile:", error.response ? error.response.data : error.message);
            alert("Failed to update profile");
        }
    };

  return (
    <>
    <Student_Header />
    <Student_side_navbar />
    <ProfileEditForm profileData={user} onSave={handleSaveProfile} allowImageUpload />
    </>
  )
}

export default Student_profile_page;