import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  collection,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../config';

/**
 * Get user profile or create a default one.
 */
export async function getOrCreateUser(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }

    // Create default user profile
    const defaultUser = {
      name: 'Nandhana',
      email: '',
      createdAt: serverTimestamp(),
    };

    await setDoc(userRef, defaultUser);
    return { id: userId, ...defaultUser };
  } catch (error) {
    console.error('Error getting/creating user:', error);
    return { id: userId, name: 'Nandhana', email: '' };
  }
}

/**
 * Update user profile fields.
 */
export async function updateUser(userId, data) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Reset user data (delete all tasks and sessions).
 */
export async function resetUserData(userId) {
  try {
    // Delete all tasks
    const tasksRef = collection(db, 'users', userId, 'tasks');
    const tasksSnapshot = await getDocs(tasksRef);
    const deleteTasksPromises = tasksSnapshot.docs.map((docSnap) => deleteDoc(docSnap.ref));
    
    // Delete all sessions
    const sessionsRef = collection(db, 'users', userId, 'sessions');
    const sessionsSnapshot = await getDocs(sessionsRef);
    const deleteSessionsPromises = sessionsSnapshot.docs.map((docSnap) => deleteDoc(docSnap.ref));

    // Execute all deletions
    await Promise.all([...deleteTasksPromises, ...deleteSessionsPromises]);

    // Optional: Reset user profile data if needed
    // const userRef = doc(db, 'users', userId);
    // await updateDoc(userRef, { ...defaultResetValues });

    return { success: true };
  } catch (error) {
    console.error('Error resetting user data:', error);
    return { success: false, error: error.message };
  }
}
