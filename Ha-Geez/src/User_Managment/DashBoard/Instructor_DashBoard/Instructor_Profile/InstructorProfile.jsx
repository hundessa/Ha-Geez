import ProfileEditForm from "../../Components/Profile_Edit_Component/ProfileEditForm"
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar"
import InstructorHeaderNavBar from "../Instructor_landingpage/Components/InstructorHeaderNavBar"
import { useUser } from "../../../../Context/AuthContext"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../../config/firebaseConfig"
import axios from "axios"

const InstructorProfile = () => {

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
    <InstructorHeaderNavBar />
    <Instructor_Sidebar />
    <ProfileEditForm profileData={user} onSave={handleSaveProfile} allowImageUpload />
    </>
  )
}

export default InstructorProfile